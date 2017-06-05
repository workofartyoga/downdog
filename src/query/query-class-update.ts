

import { Classes } from '../model/model';
import * as Bluebird from 'bluebird';
import { createClass, IClass } from '../shared/classes';

export function queryClassUpdate( classEntry: IClass )  {
  return Classes.update( classEntry, { where:{ id: classEntry.id } } )
    .then( createClass )
}
