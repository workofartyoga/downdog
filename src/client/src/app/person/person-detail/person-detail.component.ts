import { Component, OnInit } from '@angular/core';
import { IPerson } from '../../../../../shared/person';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { handleError } from '../../util/handle-error';

@Component({
  selector: 'dd-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: IPerson;
  constructor(
    private service: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    const id = route.snapshot.params['id'];
    service.personFindById( parseInt( id ) )
      .subscribe(
        person => this.person = person,
        err => handleError('ERR-PD-010',err )
      )
  }

  ngOnInit() {
  }

}
