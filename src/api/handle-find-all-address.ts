///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { addressFindAll } from '../query/address-find-all';
import { handleDatabaseError } from './handle-database-error';
import { handleError } from './handle-error';

export function handleFindAllAddress( req: Request, res: Response, next: Next ) {
  addressFindAll()
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleDatabaseError( req, res, next, 'ERR-001', 'Could not retrieve addresses', err ) )
    .catch( err => handleError( req, res, next, 'ERR-001A', 'Could not retrieve addresses', err) );
}
