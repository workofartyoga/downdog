
import * as bunyan from 'bunyan';
import * as path from 'path';
import { LoggerOptions } from 'bunyan';

export function createLoggerOptions( name: string, level:string = 'debug', src: boolean = true ) : LoggerOptions {

  return {
    name: name,
    streams: [ {
      level: 'info',
      stream: process.stdout
      },{
      level: 'debug',
      path: path.join( __dirname, '../../logs/debug-downdog-app.log' )
    }],
    level,
    serializers: bunyan.stdSerializers,
    src
  };
}
