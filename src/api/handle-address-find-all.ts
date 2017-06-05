///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { queryAddressFindAll } from '../query/query-address-find-all';
import { handleError } from './handle-error';

export function handleAddressFindAll(req: Request, res: Response, next: Next ) {
  queryAddressFindAll()
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-011', 'Could not find all addresses', err) );
}
