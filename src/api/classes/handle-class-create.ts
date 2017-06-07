import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryClassCreate } from '../../query/classes/query-class-create';

export function handleClassCreate(req: Request, res: Response, next: NextFunction ) {
  queryClassCreate( req.body )
    .then(  _.partial( handleSuccess, res ))
    .catch( err => handlePromiseError( req, res, 'ERR-040', 'Could not create new class', err) );
}
