import { createLogger } from '../common/create-logger';

const log = createLogger( 'model-error' );

export function handleModelError( errCode: string, err: any ) {
  log.error( errCode, err );
}
