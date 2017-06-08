import * as express from 'express';
import { Router } from 'express';
import { handleClassFindAll } from './handle-class-find-all';
import { handleClassFindById } from './handle-class-find-by-id';
import { handleClassCreate } from './handle-class-create';
import { handleClassUpdate } from './handle-class-update';

export function routeClasses() {

  const router: Router = express.Router();

  router.get('', handleClassFindAll );
  router.get( '/:id', handleClassFindById );
  router.post('', handleClassCreate );
  router.patch('/:id', handleClassUpdate );

  return router;
}
