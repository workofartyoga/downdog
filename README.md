# downdog
A sample of the application I have been writing for a Yoga Teacher

## Pre-requisites
* Postgres 9.6
* Node.js 6.10
* npm 4.6.1
* @angular/cli 1.1.0
* yarn 0.24.5

## Installing
`yarn install`

NOTE: there is a yarn.lock file - that should ensure the correct versions.

## Running

`DATABASE_URL=postgres://postgres:postgres@localhost:5432/database-test`

`npm start` - launch the app

## Browser
I tested on Safari, Chrome and Canary on darwin x64 os

`open http://localhost:4200` - is where the client will be hosted

NOTE: the client is currently configured to proxy to the restify Api.
