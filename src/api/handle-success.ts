
import {Response} from 'express';

export function handleSuccess( res: Response, data: any ) {
  if( Array.isArray( data ) ){
    if( data[0].id === undefined ){
      throw new Error("Handle Success: Array data.id is undefined")
    }else if( data[0].id === null ){
      throw new Error( "Handle Success: Array data.id is null");
    }
  }else {
    if (data.id === undefined) {
      console.error(data);
      throw Error("Handle Success: data undefined");
    } else if (data.id === null) {
      throw Error("Handle Success: data null");
    }
  }
  res.status(200).json( { data } );
}
