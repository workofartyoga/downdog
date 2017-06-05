///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';
import { createClass } from '../shared/classes';
import { queryClassCreate } from '../query/query-class-create';

export function handleClassCreate(req: Request, res: Response, next: Next ) {
  queryClassCreate( createClass( req.body ) )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-040', 'Could not create new class', err) );
}
