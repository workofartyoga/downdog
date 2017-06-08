import * as _ from 'lodash';

import { Request, Response, NextFunction } from 'express';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryAddressUpdate } from '../../query/address/query-address-update';
import { checkId } from '../check-id';

export function handleAddressUpdate(req: Request, res: Response, next: NextFunction ) {

  const errMsg = 'Could not update address';
  if( checkId( req, res, errMsg) ){
    return queryAddressUpdate( req.body )
      .then( _.partial( handleSuccess, res ))
      .catch( err => handlePromiseError( res, 'ERR-015', errMsg, err ));
  }


}
