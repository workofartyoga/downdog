import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { queryClassFindAll } from '../../query/classes/query-class-find-all';
import { handlePromiseError } from '../handle-promise-error';

export function handleClassFindAll(req: Request, res: Response, next: NextFunction ) {
  queryClassFindAll()
    .then(  _.partial( handleSuccess, res ))
    .catch( err => handlePromiseError( req, res, 'ERR-041', 'Could not find all classes', err) );
}
