
import {Response} from 'express';
import { createLogger } from '../common/create-logger';
import { checkData } from '../query/check-data';

export function handleSuccess( res: Response, data: any ) {
  checkData( data );
  res.status(200).json( { data } );
}
