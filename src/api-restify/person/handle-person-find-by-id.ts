import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryPersonFindById } from '../../query/person/query-person-find-by-id';
import { paramsId } from '../../parse-params-id';

export function handlePersonFindById( req: Request, res: Response, next: Next ) {
  queryPersonFindById( paramsId( req.params ) )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError(res, next, 'ERR-012', 'Could not find person', err) );
}
