

import { createAddress, IPostalAddress } from '../../shared/postal-address';
import { Addresses } from '../../model/model';
import { queryAddressFindById } from './query-address-find-by-id';

export function queryAddressUpdate(address: IPostalAddress ) {
  return Addresses.update( address, { where: { id: address.id } } )
    .then( res => queryAddressFindById( res[0] ) );
}
