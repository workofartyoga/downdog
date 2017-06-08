import { createLogger } from '../common/create-logger';

const log = createLogger('check-data');

//
// Assume all data has an id associated with it.
export function checkData( data: any ){
  if( Array.isArray( data ) ){
    checkData( data[0] );
  }else {
    if (data.id === undefined) {
      const msg1 = '{ data.id } undefined';
      log.error(msg1);
      throw Error(msg1);
    } else if (data.id === null) {
      const msg2 = '{ data.id } null';
      log.error( msg2 );
      throw Error( msg2 );
    }
  }
}
