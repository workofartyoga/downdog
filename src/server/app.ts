import * as dotenv from 'dotenv';
import * as restify from 'restify';
import { createServer, ServerOptions, ThrottleOptions } from 'restify';

import { createLogger } from './common/create-logger';

dotenv.config();

const options: ServerOptions = { name: process.env.APP_NAME };

// for testing purposes
const app = createServer(options);

app.log = createLogger( process.env.APP_NAME );

//
// Middleware
//
app.use( restify.acceptParser( ['application/json'] )); // only accept json requests
app.use( restify.gzipResponse() );
app.use( restify.bodyParser() );

const throttleOptions: ThrottleOptions = {
  burst: 100, ip: true,  overrides: { '192.168.1.1': { burst: 0, rate: 0 } }, rate: 50 };
app.use( restify.throttle( throttleOptions ) );
app.use( restify.requestLogger() );

//
// Routes
//
// initApi( app);

// Audit Logging
app.on('after', restify.auditLogger(
  { log: createLogger('dog-audit') } ) );

const port = process.env.npm_config_port || 3000;
const host = process.env.npm_config_host || 'localhost';

app.listen(port, host, () => {
  app.log.info(`${app.name} listening on ${app.url}`);
});
