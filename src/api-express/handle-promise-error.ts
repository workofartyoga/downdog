
import { createLogger } from '../common/create-logger';
import { Response } from 'express';
import { createErrorMessage } from '../create-error-message';
import { IErrorMessage } from '../shared/error-message';

const log = createLogger('handle-promise-error');


export function handlePromiseError( res: Response, errCode: string, message: string, err: any ) {

  const errObj: IErrorMessage = createErrorMessage( errCode, message );

  log.error( errObj, err );
  res.status( 500 ).json( errObj );
}
