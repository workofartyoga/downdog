///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';
import { queryClassUpdate } from '../query/query-class-update';

export function handleClassUpdate(req: Request, res: Response, next: Next ) {
  return queryClassUpdate( req.body )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-043', 'Could not update class', err) );

}
