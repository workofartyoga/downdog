import * as express from 'express';
import { Router } from 'express';
import { handlePersonFindAll } from './handle-person-find-all';
import { handlePersonFindById } from './handle-person-find-by-id';
import { handlePersonCreate } from './handle-person-create';
import { handlePersonUpdate } from './handle-person-update';

export function routePerson() {

  const router: Router = express.Router();

  router.get('', handlePersonFindAll );
  router.get( '/:id', handlePersonFindById );
  router.post('', handlePersonCreate );
  router.patch('/:id', handlePersonUpdate );

  return router;
}
