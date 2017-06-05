import * as ORM from 'Sequelize';
import * as dotenv from 'dotenv';
import * as _ from 'lodash';
import { Sequelize } from 'Sequelize';
import { loggingOptions } from './sql-logging-options';
import { createLogger } from '../common/create-logger';
import { handleModelError } from './handle-model-error';
import { initAddress } from './init-address';
import { testAddress } from './initialize/test-address';
import { initPerson } from './init-person';
import { testPeople } from './initialize/test-people';
import { initClasses } from './init-classes';
import { testClasses } from './initialize/test-classes';

dotenv.config();

const log = createLogger( 'downdog-db' );

const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/downdog-test';

const sequelize: Sequelize = new ORM(dbUrl, loggingOptions);

export const Addresses = initAddress( sequelize );
export const People = initPerson( sequelize );
export const Classes = initClasses( sequelize );

People.hasMany( Addresses, { as: 'address' } );

if ( !dbUrl.endsWith('-test')) {
  sequelize.sync()
    .then( () => {
      log.debug( 'synced!');
    })
    .catch( _.partial( handleModelError, 'ERR-MODEL-SYNC') );
} else {
  log.info( 'begin db initialization');
  sequelize.sync({force: true, match: /-test$/})
    .then(() => {
      return testAddress();
    })
    .then(() => {
      return testPeople();
    })
    .then(() => {
      return testClasses();
    })
    .then( () => {
      log.info('complete db initialization');
    })
    .catch( _.partial( handleModelError, 'ERR-MODEL-TEST-SYNC'));

}
