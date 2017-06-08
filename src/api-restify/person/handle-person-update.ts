import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryPersonUpdate } from '../../query/person/query-person-update';
import { checkId } from '../check-id';

export function handlePersonUpdate( req: Request, res: Response, next: Next ) {
  const msg = 'Could not update person';
  if( checkId( req, res,next, msg) ) {
    queryPersonUpdate( req.body)
      .then(_.partial(handleSuccess, res, next))
      .catch(err => handleError(res, next, 'ERR-013', msg, err));
  }
}
