

import { People } from '../model/model';
import { createPeople } from '../shared/person';

export function queryPersonFindAll()  {
  return People.findAll( { order: ['lastName', 'firstName']})
    .then( createPeople )
}
