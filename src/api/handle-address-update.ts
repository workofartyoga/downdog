import * as _ from 'lodash';

import { Request, Response, Next } from 'restify';
import { createAddress } from '../shared/postal-address';
import { handleSuccess } from './handle-success';
import { handleError } from './handle-error';
import { queryAddressUpdate } from '../query/query-address-update';

export function handleAddressUpdate(req: Request, res: Response, next: Next ) {
  const errMsg = 'Could not update address';
  try {
    //
    // Check to make sure client is sending the same ID
    // and that the ID is valid
    //
    const address_id = parseInt(req.params.id, 10);
    const address = createAddress( req.body );

    if (address_id !== address.id) {
      handleError(req, res, next, 'ERR-013', errMsg, null);
    }
    if( typeof address.id === 'undefined' || address.id === -1 ){
      handleError( req, res, next, 'ERR-014', errMsg, null );
    }

    return queryAddressUpdate( address )
      .then( _.partial( handleSuccess, res, next ))
      .catch( err => handleError( req, res, next, 'ERR-015', errMsg, err ));

  }catch( err ){
    handleError( req, res, next, 'ERR-016', errMsg, err)
  }
}
