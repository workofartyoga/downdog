import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryPersonFindById } from '../../query/person/query-person-find-by-id';

export function handlePersonFindById( req: Request, res: Response, next: NextFunction ) {
  queryPersonFindById( req.params.id )
    .then(  _.partial( handleSuccess, res ))
    .catch( err => handlePromiseError( req, res, 'ERR-012', 'Could not find person', err) );
}
