
import { Response, Next } from 'restify';
import { checkData } from '../query/check-data';

export function handleSuccess( res: Response, next: Next, data: any ) {
  checkData( data );
  res.json( 200, { data } );
  return next();
}
