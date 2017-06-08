import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { queryAddressFindAll } from '../../query/address/query-address-find-all';
import { handlePromiseError } from '../handle-promise-error';

export function handleAddressFindAll(req: Request, res: Response, next: NextFunction ) {

  queryAddressFindAll()
    .then( _.partial( handleSuccess, res))
    .catch( err => handlePromiseError( res, 'ERR-011', 'Could not find all addresses', err) );

}
