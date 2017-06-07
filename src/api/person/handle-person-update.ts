import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { createPerson } from '../../shared/person';
import { queryPersonUpdate } from '../../query/person/query-person-update';

export function handlePersonUpdate( req: Request, res: Response, next: NextFunction ) {
  queryPersonUpdate( parseInt(req.params.id), createPerson(req.body) )
    .then(  _.partial( handleSuccess, res ))
    .catch( err => handlePromiseError( req, res, 'ERR-013', 'Could not update person', err) );
}
