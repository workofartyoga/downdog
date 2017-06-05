

import { Addresses } from '../model/model';
import * as Bluebird from 'bluebird';
import { createAddress } from '../shared/postal-address';

export function queryAddressFindById( id: number )  {
  return Addresses.findById( id )
    .then( createAddress )
}
