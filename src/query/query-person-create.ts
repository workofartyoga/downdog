

import { People } from '../model/model';
import { createPerson, IPerson } from '../shared/person';

export function queryPersonCreate( person: IPerson)  {
  return People.create( person )
    .then( createPerson )
}
