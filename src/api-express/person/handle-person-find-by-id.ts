import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryPersonFindById } from '../../query/person/query-person-find-by-id';
import { paramsId } from '../../parse-params-id';

export function handlePersonFindById( req: Request, res: Response, next: NextFunction ) {
  queryPersonFindById( paramsId( req.params ) )
    .then(  _.partial( handleSuccess, res ))
    .catch( err => handlePromiseError( res, 'ERR-012', 'Could not find person', err) );
}
