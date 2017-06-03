
import { InternalServerError, Next, Request, Response } from 'restify';

export function handleError( req: Request, res: Response, next: Next, errCode: string, errMessage: string, err: any ) {
  req.log.error( errCode, err );
  const errISE = new InternalServerError( errCode );
  res.json( 500, { error: errCode, message: errMessage } );
  return next( errISE );
}
