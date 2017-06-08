
import { Request, Response } from 'express';
import { handleApiError } from './handle-api-error';
import { paramsId } from '../parse-params-id';

function createId( { id } ) {
  return { id };
}

export function checkId( req: Request, res: Response, errMessage: string ): boolean {
  const id = paramsId( req.params );
  const obj = createId( req.body );
  if( id !== obj.id ){
    handleApiError( res, "ERR-ID-000", errMessage, 'id != req.body.id' );
    return false;
  }
  return true;
}
