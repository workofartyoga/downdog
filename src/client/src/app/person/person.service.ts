import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { receiveApiArray, receiveApiObject } from '../util/recieve-api-data';
import { createPeople, createPerson, IPerson } from '../../../../shared/person';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {

  constructor( private http: Http) { }

  peopleGetAll(): Observable<IPerson[]> {
    return this.http.get('/api/person')
      .map( receiveApiArray )
      .map( createPeople )

  }

  personFindById( id: number ): Observable<IPerson> {
    return this.http.get(`/api/person/${id}`)
      .map( receiveApiObject )
      .map( createPerson );
  }

  personCreate( person: IPerson ): Observable<IPerson> {
    return this.http.post('/api/person', person )
      .map( receiveApiObject )
      .map( createPerson );
  }

  personUpdate( id: number, person: IPerson ): Observable< IPerson>{
    return this.http.patch(`/api/person/${id}`, person)
      .map( receiveApiObject )
      .map( createPerson );
  }
}
