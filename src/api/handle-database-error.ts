import { Thenable } from 'bluebird';
const hri = require('human-readable-ids').hri;

import { InternalServerError, Next, Request, Response } from 'restify';

export function handleDatabaseError( req: Request, res: Response, next: Next, errCode: string, errMessage: string, err: any) {

  const errId = hri.random();
  const error = err || '';
  req.log.error( 'Database error occurred', errId, errCode, err );
  const errISE = new InternalServerError( errId );
  res.json( 500, { error: errCode, message: `${errMessage}, error code: ${errId}` } );
  return next( errISE );
}
