import { People } from '../model/model';
import { createPerson, IPerson } from '../shared/person';

export function queryPersonUpdate( id: number, person: IPerson)  {
  return People.update( person, { where:{ id: person.id } } )
    .then( createPerson )
}
