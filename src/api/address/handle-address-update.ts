import * as _ from 'lodash';

import { Request, Response, NextFunction } from 'express';
import { createAddress } from '../../shared/postal-address';
import { handleSuccess } from '../handle-success';
import { handlePromiseError } from '../handle-promise-error';
import { queryAddressUpdate } from '../../query/address/query-address-update';
import { handleApiError } from '../handle-api-error';

export function handleAddressUpdate(req: Request, res: Response, next: NextFunction ) {
  const errMsg = 'Could not update address';
  try {
    //
    // Check to make sure client is sending the same ID
    // and that the ID is valid
    //
    const address_id = parseInt(req.params.id, 10);
    const address = createAddress( req.body );

    if (address_id !== address.id) {
      handleApiError(req, res, 'ERR-013', errMsg, { err: 'address_id !== address.id' });
    }
    if( typeof address.id === 'undefined' || address.id === -1 ){
      handleApiError( req, res, 'ERR-014', errMsg,  { err: 'invalid address.id' } );
    }

    return queryAddressUpdate( address )
      .then( _.partial( handleSuccess, res ))
      .catch( err => handlePromiseError( req, res, 'ERR-015', errMsg, err ));

  }catch( err ){
    handleApiError( req, res, 'ERR-016', errMsg, err)
  }
}
