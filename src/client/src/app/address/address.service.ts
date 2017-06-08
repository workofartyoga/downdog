import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { createAddress, createAddresses, IPostalAddress } from '../../../../shared/postal-address';
import { receiveApiArray, receiveApiObject } from '../util/recieve-api-data';

import 'rxjs/add/operator/map';

@Injectable()
export class AddressService {

  constructor( private http: Http) {
  }

  loadAllAddresses(): Observable<IPostalAddress[]> {
    return this.http.get('/api/address')
      .map( receiveApiArray )
      .map( createAddresses );
  }

  saveAddress( address: IPostalAddress ): Observable< IPostalAddress > {
    return this.http.post('/api/address', address)
      .map( receiveApiObject )
      .map( createAddress );
  }

  findById( id: number ): Observable<IPostalAddress> {
    return this.http.get(`/api/address/${id}`)
      .map( receiveApiObject )
      .map( createAddress );
  }

  updateAddress( id: number, address: IPostalAddress ): Observable< IPostalAddress > {
    return this.http.patch(`/api/address/${id}`, address)
      .map( receiveApiObject )
      .map( createAddress );
  }
}
