import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { createAddress, createAddresses, IPostalAddress } from '../../../../shared/postal-address';
import { receiveApiData, receiveApiDatum } from '../util/recieve-api-data';

import 'rxjs/add/operator/map';

@Injectable()
export class AddressService {

  constructor( private http: Http) {
  }

  loadAllAddresses(): Observable<IPostalAddress[]> {
    return this.http.get('/api/address')
      .map( receiveApiData )
      .map( createAddresses );
  }

  saveAddress( address: IPostalAddress ): Observable< IPostalAddress > {
    return this.http.post('/api/address', address)
      .map( receiveApiDatum )
      .map( createAddress );
  }
}
