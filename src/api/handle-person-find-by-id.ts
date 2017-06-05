///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';
import { queryPersonFindById } from '../query/query-person-find-by-id';

export function handlePersonFindById( req: Request, res: Response, next: Next ) {
  queryPersonFindById( req.params.id )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-012', 'Could not find person', err) );
}
