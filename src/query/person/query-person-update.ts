import { People } from '../../model/model';
import { IPerson } from '../../shared/person';
import { queryPersonFindById } from './query-person-find-by-id';

export function queryPersonUpdate( person: IPerson)  {
  return People.update( person, { where:{ id: person.id } } )
    .then( res => queryPersonFindById( res[0] ) )
}
