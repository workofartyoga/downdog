import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createClass, createNewClass, IClass } from '../../../../../shared/classes';
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
        classEntry => {
          this.classEntry = classEntry;
          this.classEntry.id = this.classId;
        },
        _.partial( handleError, 'ERR-CLS-300')
      );

  }


  initClassEntry( id: number ){
    this.classEntry = {
      id: id,
      description: '',
      duration: 0,
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
          _.partial(handleError, 'ERR-CLS-301')
        );
    }
  }
  goBack() {
    this.router.navigate(['classes']);
  }
  cancel() {
    this.goBack();
  }

  save(){

    if( this.classId !== -1 ) {
      this.classEntry.id = this.classId;
      this.service.saveClass(this.classId, this.classEntry)
        .subscribe(
          classEntry => {
            this.goBack();
          },
          _.partial(handleError, 'ERR-CLS-302')
        );
    }else{
      this.service.createClass( createNewClass( this.classEntry ) )
        .subscribe(
          classEntry => {
            this.goBack();
          },
          _.partial( handleError, 'ERR-CLS-303' )
        );
    }
  }

}

function toFormValue( { description, duration, audience, summary, tags, title }: any ) {
  return { description, duration, audience, summary, tags, title };
}
