import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { queryClassFindAll } from '../../query/classes/query-class-find-all';
import { handleError } from '../handle-error';

export function handleClassFindAll(req: Request, res: Response, next: Next ) {
  queryClassFindAll()
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( res, next, 'ERR-041', 'Could not find all classes', err) );
}
