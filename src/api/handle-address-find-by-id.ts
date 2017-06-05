///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';
import { queryAddressFindById } from '../query/query-address-find-by-id';

export function handleAddressFindById(req: Request, res: Response, next: Next ) {
  queryAddressFindById( parseInt(req.params.id) )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-012', 'Could not retrieve address', err) );
}
