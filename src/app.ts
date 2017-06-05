import * as dotenv from 'dotenv';
import * as restify from 'restify';
import { createServer, ServerOptions, ThrottleOptions } from 'restify';

import { createLogger } from './common/create-logger';
import { initApi } from './api/init-api';

dotenv.config();
const APP_NAME = process.env.APP_NAME || 'downdog-app';
const PORT = process.env.npm_config_port || 3000;
const HOST = process.env.npm_config_host || 'localhost';

const options: ServerOptions = { name: APP_NAME };

// for testing purposes
const app = createServer(options);

app.log = createLogger( APP_NAME );

//
// Middleware
//
app.use( restify.acceptParser( ['application/json'] )); // only accept json requests
app.use( restify.gzipResponse() );
app.use( restify.bodyParser() );

const throttleOptions: ThrottleOptions = {
  burst: 100, ip: true,  overrides: { '192.168.1.1': { burst: 0, rate: 0 } }, rate: 50 };
app.use( restify.throttle( throttleOptions ) );

app.use( restify.requestLogger() ); // add a req.log entry

app.get( /\/?.*/, restify.serveStatic({
  directory:'./dist/client/',
  default: 'index.html'
}));


//
// Routes
//
initApi( app);

// Audit Logging
app.on('after', restify.auditLogger(
  { log: createLogger('downdog-audit') } ) );


app.listen(PORT, HOST, () => {
  app.log.info(`${app.name} listening on ${app.url}`);
});
