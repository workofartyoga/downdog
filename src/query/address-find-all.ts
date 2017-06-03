

import { Addresses } from '../model/model';
import * as Bluebird from 'bluebird';
import { createAddresses, IPostalAddress } from '../shared/postal-address';

export function addressFindAll(): Bluebird<IPostalAddress[]>  {
  return Addresses.findAll()
    .then( createAddresses );
}
