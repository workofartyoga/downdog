import * as _ from 'lodash';

import { Request, Response, Next } from 'restify';
import { handleSuccess } from '../handle-success';
import { handleError } from '../handle-error';
import { queryAddressUpdate } from '../../query/address/query-address-update';
import { checkId } from '../check-id';

export function handleAddressUpdate(req: Request, res: Response, next: Next ) {
  const errMsg = 'Could not update address';
  if (checkId(req, res, next, errMsg)) {
    queryAddressUpdate(req.body)
      .then(_.partial(handleSuccess, res, next))
      .catch(err => handleError( res, next, 'ERR-015', errMsg, err));
  }
}
