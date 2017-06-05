///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';
import { queryPersonCreate } from '../query/query-person-create';

export function handlePersonCreate( req: Request, res: Response, next: Next ) {
  queryPersonCreate( req.body )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-010', 'Could not create person', err) );
}
