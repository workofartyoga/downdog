
const hri = require('human-readable-ids').hri;
import { InternalServerError, Next, Request, Response } from 'restify';

export function handleError( req: Request, res: Response, next: Next, errCode: string, errMessage: string, err: any ) {
  const errId = hri.random();
  const error = err || '';
  req.log.error( 'Database error occurred', errId, errCode, error );
  const errISE = new InternalServerError( error, `${errId} ${errCode} ${errMessage}` );
  res.json( 500, { error: errCode, message: `${errId} ${errMessage}` } );
  return next( errISE );
}
