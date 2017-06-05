

import { IPostalAddress } from '../shared/postal-address';
import { Addresses } from '../model/model';

export function queryAddressUpdate(address: IPostalAddress ) {
  return Addresses.update( address, { where: { id: address.id } } );
}
