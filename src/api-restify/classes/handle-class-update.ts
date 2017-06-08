import * as _ from 'lodash';
import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryClassUpdate } from '../../query/classes/query-class-update';
import { checkId } from '../check-id';

export function handleClassUpdate(req: Request, res: Response, next: Next ) {
  const msg = 'Could not update class';
  if( checkId( req, res, next, msg )) {
    // intentionally not passing classEntry

    queryClassUpdate(req.body)
      .then(_.partial(handleSuccess, res, next))
      .catch(err => handleError( res, next, 'ERR-043', msg, err));
  }
}
