

import { Classes } from '../../model/model';
import { createClass } from '../../shared/classes';

export function queryClassCreate( classEntry: any )  {

  return Classes.create( classEntry )
    .then( createClass )
}
