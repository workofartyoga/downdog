import * as _ from 'lodash';
import { People } from '../model';
import { handleModelError } from '../handle-model-error';

export function testPeople() {
  return People.bulkCreate([{
    alias: 'Abe',
    email: 'abe@example.com',
    firstName: 'Abraham',
    lastName: 'Muesseltoff',
    phone: '888-555-1212',
    website: 'https://abe.mussletoff.name'
  }, {
    alias: 'Bud',
    email: 'bud@example.com',
    firstName: 'Barry',
    lastName: 'Brenahan',
    phone: '888-555-1234',
    website: 'https://bud.brenahan.name'
  }])
    .catch( _.partial( handleModelError, 'TEST-SETUP-PEOPLE'));
}
