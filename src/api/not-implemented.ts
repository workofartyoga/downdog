
import { Response, Next, NotImplementedError } from 'restify';

export function notImplementedError( res: Response, next: Next, info: string ) {
  return next(new NotImplementedError(info) );
}
