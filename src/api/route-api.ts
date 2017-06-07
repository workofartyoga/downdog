
import * as express from 'express';
import { Router } from 'express';
import { routeAddress } from './address/route-address';
import { routePerson } from './person/route-person';
import { routeClasses } from './classes/route-classes';

export function routeApi() : Router {

  const apiRouter: Router = express.Router();

  apiRouter.use('/address', routeAddress() );
  apiRouter.use('/person', routePerson() );
  apiRouter.use('/classes', routeClasses() );
  return apiRouter;
}
