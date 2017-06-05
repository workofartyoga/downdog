import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from '../../../../../shared/person';
import { PersonService } from '../person.service';
import { handleError } from '../../util/handle-error';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dd-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people: IPerson[];

  constructor(
    private service: PersonService,
    private router: Router
  ) {
    this.service.peopleGetAll()
      .subscribe(
        people => this.people = people,
        err => handleError( 'ERR-PL-010', err )
      );
  }

  ngOnInit() {
  }

  select( person: IPerson ) {
    this.router.navigate(['person', 'detail', person.id ]);
  }

  edit( person: IPerson ) {
    this.router.navigate(['person/edit', person.id ]);
  }

}
