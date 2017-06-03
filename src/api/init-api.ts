
import { Server } from 'restify';
import { handleFindAllAddress } from './handle-find-all-address';

export function initApi( app: Server ) {

  // const classapi = "/api/class";
  // app.get( classapi, handleClassesAll );
  // app.get( classapi, handleClassesAll );

  const api_address = '/api/address';
  app.get( api_address, handleFindAllAddress );
}
