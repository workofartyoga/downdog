

import { People } from '../../model/model';
import { createPeople } from '../../shared/person';

export function queryPersonFindAll()  {
  return People.findAll( { order: ['lastName', 'firstName']})
    .then( (res: any) => {
      console.log( JSON.stringify(res) );
      return createPeople( res );
  } );
}
