

import { Addresses } from '../../model/model';
import { createAddress } from '../../shared/postal-address';

export function queryAddressCreate( address: any ) {
  return Addresses.create( address )
    .then( createAddress );
}
