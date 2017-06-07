

import { Classes } from '../../model/model';
import * as Bluebird from 'bluebird';
import { createClass, IClass } from '../../shared/classes';
import { queryClassFindById } from './query-class-find-by-id';

export function queryClassUpdate( classEntry: IClass )  {
  return Classes.update( classEntry, { where:{ id: classEntry.id } } )
    .then( res => queryClassFindById( res[0] ) )
}
