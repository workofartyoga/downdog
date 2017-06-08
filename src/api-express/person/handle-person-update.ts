import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { createPerson } from '../../shared/person';
import { queryPersonUpdate } from '../../query/person/query-person-update';
import { handleApiError } from '../handle-api-error';
import { checkId } from '../check-id';

export function handlePersonUpdate( req: Request, res: Response, next: NextFunction ) {

  const msg = 'Could not update person';
  if( checkId( req, res, msg) ){
    return queryPersonUpdate( req.body )
      .then(  _.partial( handleSuccess, res ))
      .catch( err => handlePromiseError( res, 'ERR-013', msg, err) );
  }
}
