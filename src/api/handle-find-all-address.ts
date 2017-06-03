import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleError } from './handle-error';
import { handleSuccess } from './handle-success';
import { addressFindAll } from '../query/address-find-all';

export function handleFindAllAddress( req: Request, res: Response, next: Next ) {
  addressFindAll()
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err =>  handleError( req, res, next, 'ERROR: Address-find-all', err ) );
}
