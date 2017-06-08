import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryPersonCreate } from '../../query/person/query-person-create';
import { createPerson } from '../../shared/person';

export function handlePersonCreate( req: Request, res: Response, next: NextFunction ) {
  queryPersonCreate( createPerson( req.body ) )
    .then(  _.partial( handleSuccess, res))
    .catch( err => handlePromiseError( res, 'ERR-010', 'Could not create person', err) );
}
