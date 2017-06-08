import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryClassUpdate } from '../../query/classes/query-class-update';
import { createClass } from '../../shared/classes';
import { handleApiError } from '../handle-api-error';
import { checkId } from '../check-id';

export function handleClassUpdate(req: Request, res: Response, next: NextFunction ) {

  const msg = 'Could not update class';
  if( checkId( req, res, msg )){
    // intentionally not passing classEntry
    return queryClassUpdate( req.body )
      .then(  _.partial( handleSuccess, res))
      .catch( err => handlePromiseError( res, 'ERR-043', msg, err) );
  }
}
