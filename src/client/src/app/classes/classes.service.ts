import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { createClass, createClasses, IClass } from '../../../../shared/classes';
import { Observable } from "rxjs/Observable";
import { receiveApiArray, receiveApiObject } from '../util/recieve-api-data';

@Injectable()
export class ClassesService {

  constructor( private http: Http) { }

  loadAllClasses() {
    return this.http.get('/api/classes')
      .map( receiveApiArray )
      .map( createClasses );
  }

  createClass( classEntry: IClass ){
    return this.http.post( '/api/classes', classEntry)
      .map( receiveApiObject )
      .map( createClass);
  }

  saveClass( id: number, classEntry: IClass ){
    return this.http.patch(`/api/classes/${id}`, classEntry )
      .map( receiveApiObject )
      .map( createClass );
  }

  findClassById( id: number) {
    return this.http.get(`/api/classes/${id}`)
      .map( receiveApiObject )
      .map( createClass );
  }
}
