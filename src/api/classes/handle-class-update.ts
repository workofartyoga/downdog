import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryClassUpdate } from '../../query/classes/query-class-update';

export function handleClassUpdate(req: Request, res: Response, next: NextFunction ) {
  return queryClassUpdate( req.body )
    .then(  _.partial( handleSuccess, res))
    .catch( err => handlePromiseError( req, res, 'ERR-043', 'Could not update class', err) );

}
