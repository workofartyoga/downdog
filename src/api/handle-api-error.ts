
const hri = require('human-readable-ids').hri;
import { Request, Response } from 'express';

export function handleApiError( req: Request, res: Response, errCode: string, errMessage: string, err: any ) {
  const errId = hri.random();
  req.log.error(`Api Error: ${errId} errCode: ${errCode} errMessage: ${errMessage} `, err );
  res.status( 500 ).json( { error: errCode, message: `${errId} ${errMessage}` } );
}
