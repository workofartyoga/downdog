///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';
import { queryClassFindById } from '../query/query-class-find-by-id';

export function handleClassFindById(req: Request, res: Response, next: Next ) {
  queryClassFindById( parseInt( req.params.id, 10 ) )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-042', 'Could not find class by id', err) );
}
