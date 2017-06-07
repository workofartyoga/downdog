

import { People } from '../../model/model';
import { createPerson } from '../../shared/person';

export function queryPersonCreate( person: any)  {
  return People.create( person )
    .then( createPerson )
}
