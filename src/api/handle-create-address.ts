import * as _ from 'lodash';

import { Request, Response, Next } from 'restify';
import { createAddress } from '../shared/postal-address';
import { queryAddressCreate } from '../query/query-address-create';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';

export function handleCreateAddress(req: Request, res: Response, next: Next ) {
  return queryAddressCreate( createAddress( req.body) )
    .then( obj => { console.log( 'Create Address:', JSON.stringify(obj) ); return obj; } )
    .then( _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-002A', 'Could not create address', err ));
}
