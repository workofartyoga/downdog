import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryPersonCreate } from '../../query/person/query-person-create';

export function handlePersonCreate( req: Request, res: Response, next: Next ) {
  queryPersonCreate( req.body )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( res, next, 'ERR-010', 'Could not create person', err) );
}
