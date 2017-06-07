import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryClassFindById } from '../../query/classes/query-class-find-by-id';

export function handleClassFindById(req: Request, res: Response, next: NextFunction ) {
  queryClassFindById( parseInt( req.params.id, 10 ) )
    .then(  _.partial( handleSuccess, res ))
    .catch( err => handlePromiseError( req, res, 'ERR-042', 'Could not find class by id', err) );
}
