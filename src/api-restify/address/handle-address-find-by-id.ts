import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryAddressFindById } from '../../query/address/query-address-find-by-id';
import { paramsId } from '../../parse-params-id';

export function handleAddressFindById(req: Request, res: Response, next: Next ) {
  queryAddressFindById( paramsId(req.params) )
    .then(  _.partial( handleSuccess, res, next ))
    .catch( err => handleError( res, next, 'ERR-012', 'Could not retrieve address', err) );
}
