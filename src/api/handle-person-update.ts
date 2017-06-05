///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';
import { createPerson } from '../shared/person';
import { queryPersonUpdate } from '../query/query-person-update';

export function handlePersonUpdate( req: Request, res: Response, next: Next ) {
  queryPersonUpdate( parseInt(req.params.id), createPerson(req.body) )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( req, res, next, 'ERR-013', 'Could not update person', err) );
}
