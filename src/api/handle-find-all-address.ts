///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { queryAddressFindAll } from '../query/query-address-find-all';
import { handleError } from './handle-error';

export function handleFindAllAddress( req: Request, res: Response, next: Next ) {
  queryAddressFindAll()
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-001A', 'Could not retrieve addresses', err) );
}
