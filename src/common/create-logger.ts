import * as bunyan from 'bunyan';
import { LoggerOptions } from 'bunyan';
import { createLoggerOptions } from './logger-options';

export function createLogger( name: string ) {
  const logOptions: LoggerOptions = createLoggerOptions( name );
  return bunyan.createLogger(logOptions);
}
