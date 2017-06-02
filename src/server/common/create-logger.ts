import * as bunyan from 'bunyan';

export function createLogger( name: string ) {
  return bunyan.createLogger({ name , stream: process.stdout });
}
