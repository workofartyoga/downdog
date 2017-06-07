import * as dotenv from 'dotenv';
import * as express from 'express';
import * as bunyan from 'express-bunyan-logger';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import { Application } from 'express';
import { routeApi } from './api/route-api';
import { handleRestError } from './handle-rest-error';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

// Setup Middleware
app.use( bodyParser.json() );
app.use( bunyan() );
app.use('/api', routeApi() );

app.use( handleRestError );

app.use( '/', express.static( path.join( __dirname, 'client') ) );

app.listen( port, () => {
  console.log( `server running on port: ${port}`);
} );

process.on( 'warning', (warning: any) => {
  console.warn( `Warning issued NAME: [${warning.name}], MESSAGE: [${warning.message}], STACK: [${warning.stack}]` );
});

process.on( 'unhandledRejection', ( reason: any, p: any ) => {
  console.error( `Unhandled Rejection at: ${p} for reason: ${reason}`);
});

process.on( 'uncaughtException',  ( err:any ) => {
  const errObj = JSON.parse( JSON.stringify( err, ['stack', 'message', 'inner']) );
  console.error( "Uncaught Exception handled: ", errObj );
});

// test the uncaughtException handler
// nonExistantFunction();

// test the Unhandled Rejection handler
// function SomeRejectResource() {
//   this.loaded = Promise.reject( new Error("Resource not yet loaded"));
// }
// const resource = new SomeRejectResource();

// test the warning handler
// events.defaultMaxListeners = 1;
// process.on('foo', () => {} );
// process.on( 'foo', () => {} );
// process.emitWarning( "This API is deprecated", "DeprecationWarning");
