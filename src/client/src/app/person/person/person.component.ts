import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { IPerson } from '../../../../../shared/person';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'dd-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  people$ : Observable< IPerson[] >;
  constructor(
    private _service: PersonService,
    private _router: Router
  ) {
    this.people$ = this._service.peopleGetAll();
  }

  details( person: IPerson ) {
    this._router.navigate([ 'person', 'detail', person.id ]);
  }

  edit( person: IPerson ) {
   this._router.navigate([ 'person', 'edit', person.id ])
  }

  create() {
    this._router.navigate([ 'person', 'create' ])
  }
}
