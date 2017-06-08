
import { createErrorMessage } from '../create-error-message';
import { InternalServerError, Next, Request, Response } from 'restify';
import { IErrorMessage } from '../shared/error-message';

export function handleError( res: Response, next: Next, errCode: string, errMessage: string, err: any ) {
  const errObj: IErrorMessage = createErrorMessage( errCode, errMessage );
  const error = err || '';
  const errISE = new InternalServerError( error, errObj );
  res.json( 500, errObj );
  return next( errISE );
}
