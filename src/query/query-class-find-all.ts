

import { Classes } from '../model/model';
import * as Bluebird from 'bluebird';
import { createClasses } from '../shared/classes';

export function queryClassFindAll()  {
  return Classes.findAll({ order: ['title'] })
    .then( createClasses )
}
