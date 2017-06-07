import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryAddressFindById } from '../../query/address/query-address-find-by-id';

export function handleAddressFindById(req: Request, res: Response, next: NextFunction) {
  queryAddressFindById( parseInt(req.params.id) )
    .then(  _.partial( handleSuccess, res ))
    .catch( err => handlePromiseError( req, res, 'ERR-012', 'Could not retrieve address', err) );
}
