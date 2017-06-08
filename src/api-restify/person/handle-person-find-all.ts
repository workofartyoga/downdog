import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryPersonFindAll } from '../../query/person/query-person-find-all';

export function handlePersonFindAll( req: Request, res: Response, next: Next ) {
  queryPersonFindAll()
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( res, next, 'ERR-011', 'Could not find all people', err) );
}
