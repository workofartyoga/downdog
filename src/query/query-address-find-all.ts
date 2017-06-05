

import { Addresses } from '../model/model';
import * as Bluebird from 'bluebird';
import { createAddresses, IPostalAddress } from '../shared/postal-address';

export function queryAddressFindAll()  {
  return Addresses.findAll( { order: [ 'state', 'city', 'postalCode', 'street1' ] })
    .then( createAddresses )
}
