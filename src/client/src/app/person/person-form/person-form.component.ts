import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { createPerson, IPerson } from '../../../../../shared/person';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { handleError } from '../../util/handle-error';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dd-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup;
  personId: number;
  person: IPerson;

  constructor(
    private _fb: FormBuilder,
    private _service: PersonService,
    private _router: Router,
    _route: ActivatedRoute
  ) {
    try{
      const id = _route.snapshot.params['id'];
      if( id ) {
        this.setPerson(parseInt(id));
      }else{
        this.setPerson( -1 );
      }

    }catch( err ){
      handleError('ERR-PERSON-052', err );
    }
  }

  ngOnInit() {
    this.initForm();
  }

  setPerson( id: number ){
    this.personId = id;
    this.person = {
      id: -1,
      alias: '',
      bio: '',
      email: '',
      firstName: '',
      imageUrl: '',
      lastName: '',
      phone: '',
      website: ''
    };

    if( id !== -1 ) {
      this._service.personFindById( this.personId )
        .subscribe(
          person => {
            this.person = person;
            this.personForm.setValue( formValues(this.person) )
          },
          _.partial( handleError, 'ERR-051')

        );
    }
  }
  initForm(){

    this.personForm = this._fb.group( {
      alias: [ this.person.alias ],
      bio: [ this.person.bio ],
      email: [this.person.email, [ Validators.required, Validators.email ] ],
      firstName: [ this.person.firstName, [ Validators.required ] ],
      imageUrl: [ this.person.imageUrl ],
      lastName: [ this.person.lastName, [ Validators.required ]  ],
      phone: [ this.person.phone ],
      website: [ this.person.website ]
    })

    this.personForm.valueChanges
      .filter( () => this.personForm.valid ) // only want to see changes on valid values
      .map( createPerson )             // transform the formValue into an address
      .subscribe(
        person => {
          this.person = person;
          this.person.id = this.personId;
        }
      );

  }

  goBack() {
    this._router.navigate( ['person']);
  }
  save(){
    if( this.personId === -1 ){
      this._service.personCreate( this.person )
        .subscribe(
          person => this.goBack(),
          _.partial( handleError, 'ERR-053' )
        )
    }else{
      this._service.personUpdate( this.person.id, this.person )
        .subscribe(
          person => this.goBack(),
          _.partial( handleError, 'ERR-054')
        )
    }
  }

  cancel(){
    this.goBack();
  }
}

function formValues( { alias, bio, email, firstName, imageUrl, lastName, phone, website}: any ){
  return { alias, bio, email, firstName, imageUrl, lastName, phone, website};
}
