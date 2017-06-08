import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryPersonFindAll } from '../../query/person/query-person-find-all';

export function handlePersonFindAll( req: Request, res: Response, next: NextFunction ) {
  queryPersonFindAll()
    .then(  _.partial( handleSuccess, res))
    .catch( err => handlePromiseError( res, 'ERR-011', 'Could not find all people', err) );
}
