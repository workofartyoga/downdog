
import { Server } from 'restify';

import { handleAddressCreate } from './handle-address-create';
import { handleAddressFindAll } from './handle-address-find-all';
import { handleAddressFindById } from './handle-address-find-by-id';
import { handleAddressUpdate } from './handle-address-update';

import { handleClassCreate } from './handle-class-create';
import { handleClassFindAll } from './handle-class-find-all';
import { handleClassFindById } from './handle-class-find-by-id';
import { handleClassUpdate } from "./handle-class-update";

import { handlePersonCreate } from './handle-person-create';
import { handlePersonFindAll } from './handle-person-find-all';
import { handlePersonFindById } from './handle-person-find-by-id';
import { handlePersonUpdate } from './handle-person-update';

export function initApi( app: Server ) {

  const api_address = '/api/address';
  app.post( api_address, handleAddressCreate );
  app.get( api_address, handleAddressFindAll );
  app.get( `${api_address}/:id`, handleAddressFindById );
  app.patch( `${api_address}/:id`, handleAddressUpdate );

  const api_person = '/api/person';
  app.post( api_person, handlePersonCreate );
  app.get( api_person, handlePersonFindAll );
  app.get( `${api_person}/:id`, handlePersonFindById );
  app.patch( `${api_person}/:id`, handlePersonUpdate );

  const api_class = '/api/class';
  app.post( api_class, handleClassCreate );
  app.get( api_class, handleClassFindAll );
  app.get( `${api_class}/:id`, handleClassFindById );
  app.patch( `${api_class}/:id`, handleClassUpdate );
}
