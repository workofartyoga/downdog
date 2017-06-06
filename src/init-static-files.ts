
import * as restify from 'restify';
import { Server } from 'restify';
import * as path from 'path';


export function initStaticFiles(app: Server) {

  // anything under assets
  app.get(/\/assets\/?.*/, restify.serveStatic( {
    directory: path.join( __dirname, 'client' )
  } ) );

  // give up index.html, inline.bundle.js, main.bundle.js, polyfills.bundle.js
  // scripts.bundle.js, styles.bundle.js, vendor.bundle.js
  // favicon.ico
  app.get( '/', restify.serveStatic( {
    directory: path.join( __dirname, 'client' ),
    default: 'index.html'
  }));
  app.get( '/favicon.ico', restify.serveStatic( {
    directory: path.join( __dirname, 'client' )
  }));

  app.get( /\/*.bundle.js/, restify.serveStatic( {
    directory: path.join( __dirname, 'client' )
  }));

  app.get( /\/*.bundle.css/, restify.serveStatic( {
    directory: path.join( __dirname, 'client' )
  }));
}
