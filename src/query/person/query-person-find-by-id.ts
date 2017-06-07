import { People } from '../../model/model';
import { createPerson, IPerson } from '../../shared/person';

export function queryPersonFindById( id: number)  {
  return People.findById( id )
    .then( createPerson )
}
