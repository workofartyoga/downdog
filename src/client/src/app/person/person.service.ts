import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { receiveApiData, receiveApiDatum } from '../util/recieve-api-data';
import { createPeople, createPerson, IPerson } from '../../../../shared/person';
import { Observable } from 'rxjs/Observable';
import { handleError } from '../util/handle-error';

@Injectable()
export class PersonService {

  constructor( private http: Http) { }

  peopleGetAll(): Observable<IPerson[]> {
    return this.http.get('/api/person')
      .map( receiveApiData )
      .map( createPeople )

  }

  personFindById( id: number ): Observable<IPerson> {
    return this.http.get(`/api/person/${id}`)
      .map( receiveApiDatum )
      .map( createPerson );
  }

  personCreate( person: IPerson ): Observable<IPerson> {
    return this.http.post('/api/person', person )
      .map( receiveApiDatum )
      .map( createPerson );
  }

  personUpdate( id: number, person: IPerson ): Observable< IPerson>{
    return this.http.patch(`/api/person/${id}`, person)
      .map( receiveApiDatum )
      .map( createPerson );
  }
}
