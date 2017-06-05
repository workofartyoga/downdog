

import { Classes } from '../model/model';
import * as Bluebird from 'bluebird';
import { createClass, IClass } from '../shared/classes';

export function queryClassCreate( classEntry: IClass )  {

  return Classes.create( classEntry )
    .then( createClass )
}
