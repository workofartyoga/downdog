import * as _ from 'lodash';

import { Request, Response, NextFunction } from 'express';
import { createAddress, createNewAddress } from '../../shared/postal-address';
import { queryAddressCreate } from '../../query/address/query-address-create';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';

export function handleAddressCreate(req: Request, res: Response, next: NextFunction ) {
  return queryAddressCreate( req.body )
    .then( _.partial( handleSuccess, res ))
    .catch( err => { handlePromiseError( req, res, 'ERR-010', 'Could not create address', err) });
}
