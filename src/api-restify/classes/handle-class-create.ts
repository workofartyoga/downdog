import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryClassCreate } from '../../query/classes/query-class-create';

export function handleClassCreate(req: Request, res: Response, next: Next ) {
  queryClassCreate( req.body )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( res, next, 'ERR-040', 'Could not create new class', err) );
}
