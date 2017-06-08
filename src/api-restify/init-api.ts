
import { Server } from 'restify';

import { handleAddressCreate } from './address/handle-address-create';
import { handleAddressFindAll } from './address/handle-address-find-all';
import { handleAddressFindById } from './address/handle-address-find-by-id';
import { handleAddressUpdate } from './address/handle-address-update';

import { handleClassCreate } from './classes/handle-class-create';
import { handleClassFindAll } from './classes/handle-class-find-all';
import { handleClassFindById } from './classes/handle-class-find-by-id';
import { handleClassUpdate } from "./classes/handle-class-update";

import { handlePersonCreate } from './person/handle-person-create';
import { handlePersonFindAll } from './person/handle-person-find-all';
import { handlePersonFindById } from './person/handle-person-find-by-id';
import { handlePersonUpdate } from './person/handle-person-update';

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

  const api_classes = '/api/classes';
  app.post( api_classes, handleClassCreate );
  app.get( api_classes, handleClassFindAll );
  app.get( `${api_classes}/:id`, handleClassFindById );
  app.patch( `${api_classes}/:id`, handleClassUpdate );
}
