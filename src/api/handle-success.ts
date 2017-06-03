
import {Response, Next} from 'restify';

export function handleSuccess( res: Response, next: Next, data: any ) {
  res.json( 200, { data } );
  return next();
}
