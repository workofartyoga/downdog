
import * as express from 'express';
import { Router } from 'express';
import { handleAddressFindAll } from './handle-address-find-all';
import { handleAddressCreate } from './handle-address-create';
import { handleAddressFindById } from './handle-address-find-by-id';
import { handleAddressUpdate } from './handle-address-update';

export function routeAddress( ) {

  const router: Router = express.Router();

  router.get('', handleAddressFindAll );
  router.get( '/:id', handleAddressFindById );
  router.post('', handleAddressCreate );
  router.patch('/:id', handleAddressUpdate );
  return router;
}
