

import { IPostalAddress } from '../shared/postal-address';
import { Addresses } from '../model/model';

export function queryAddressCreate(address: IPostalAddress ) {
  return Addresses.create( address );
}
