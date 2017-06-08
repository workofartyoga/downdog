import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryClassFindById } from '../../query/classes/query-class-find-by-id';
import { paramsId } from '../../parse-params-id';

export function handleClassFindById(req: Request, res: Response, next: Next ) {
  queryClassFindById( paramsId( req.params ) )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( res, next, 'ERR-042', 'Could not find class by id', err) );
}
