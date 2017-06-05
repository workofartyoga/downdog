import * as _ from 'lodash';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createClass, IClass } from '../../../../../shared/classes';
import { ClassesService } from '../classes.service';
import { handleError } from '../../util/handle-error';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'dd-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  classForm: FormGroup;

  classEntry: IClass;
  classId: number;

  constructor(
    private fb: FormBuilder,
    private service: ClassesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = route.snapshot.params['id'];
    if( id ){
      this.initClassEntry( parseInt( id, 10 ) );
      console.log( "Route id:", id )
    }else{
      this.initClassEntry( -1 );
    }
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.classForm = this.fb.group(
      {
        description: [this.classEntry.description, [Validators.required]],
        duration: [this.classEntry.duration, [Validators.required, Validators.pattern('[0-9]+')]],
        // icon: [this.classEntry.icon],
        // imageUrl: [this.classEntry.imageUrl],
        audience: [this.classEntry.audience, [Validators.required]],
        summary: [this.classEntry.summary, [Validators.required, Validators.maxLength(400)]],
        title: [this.classEntry.title, [Validators.required]],
        tags: [this.classEntry.tags]
      }
    );

    this.classForm.valueChanges
      .filter( () => this.classForm.valid ) // only want to see changes on valid values
      .map( createClass )             // transform the formValue into an address
      .subscribe(
        classEntry => this.classEntry = classEntry
      );

  }

  setClassEntry( classEntry: IClass ){
    this.classEntry = classEntry;
  }

  initClassEntry( id: number ){
    this.classEntry = {
      id: id,
      description: '',
      duration: 0,
      // icon: '',
      // imageUrl: '',
      audience: '',
      summary: '',
      tags: '',
      title: ''
    };
    this.classId = id;
    if( id !== -1 ) {
      this.service.findClassById( id )
        .subscribe(
          classEntry => {
            this.classEntry = classEntry;
            this.classForm.setValue( toFormValue(this.classEntry) );
          },
          _.partial(handleError, 'ERR-302')
        );
    }
  }
  cancel() {
    this.router.navigate(['classes', 'list' ]);
  }

  save(){

    if( this.classId !== -1 ) {
      this.classEntry.id = this.classId;
      this.service.saveClass(this.classId, this.classEntry)
        .subscribe(
          classEntry => {
            this.setClassEntry( classEntry );
            this.router.navigate(['classes','list']);
          },
          _.partial(handleError, 'ERR-300')
        );
    }else{
      this.service.createClass( this.classEntry )
        .subscribe(
          classEntry => {
            this.setClassEntry( classEntry );
            this.router.navigate(['classes','list']);
          },
          _.partial( handleError, 'ERR-301' )
        );
    }
  }

}

// function toFormValue( { description, duration, icon, imageUrl, audience, summary, tags, title }: any ) {
//   return { description, duration, icon, imageUrl, audience, summary, tags, title };
// }
function toFormValue( { description, duration, audience, summary, tags, title }: any ) {
  return { description, duration, audience, summary, tags, title };
}
