import * as _ from 'lodash';
import { Addresses } from '../model';
import { handleModelError } from '../handle-model-error';

export function testAddress() {
  return Addresses.bulkCreate([{
    city:       'Cincinnati',
    label:      'home',
    postalCode: 45230,
    state:      'OH',
    street1:    'Beacon St'
  }, {
    city:       'Cincinnati',
    label:      'work',
    postalCode: 45230,
    state:      'OH',
    street1:    'Plainville St'
  }]).catch( _.partial( handleModelError, 'TEST-ADDRESSES-SETUP'));
}
