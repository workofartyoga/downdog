
import { createLogger } from '../common/create-logger';
import { Response } from 'express';
import { createErrorMessage } from '../create-error-message';
import { IErrorMessage } from '../shared/error-message';

const log = createLogger('handle-api-express-error');
export function handleApiError( res: Response, errCode: string, errMessage: string, err: any ) {
  const errObj: IErrorMessage = createErrorMessage( errCode, errMessage );
  log.error(errObj, err );
  res.status( 500 ).json( errObj );
}
