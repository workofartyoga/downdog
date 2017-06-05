

import { Classes } from '../model/model';
import * as Bluebird from 'bluebird';
import { createClass } from '../shared/classes';

export function queryClassFindById( id: number )  {
  return Classes.findById( id )
    .then( createClass )
}
