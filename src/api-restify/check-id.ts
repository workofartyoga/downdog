import { Request, Response, Next } from 'restify';
import { paramsId } from '../parse-params-id';
import { handleError } from './handle-error';

function createId( { id } ) {
  return { id };
}

export function checkId( req: Request, res: Response, next: Next, errMessage: string ): boolean {
  const id = paramsId( req.params );
  const obj = createId( req.body );
  if( id !== obj.id ){
    handleError( res, next,  "ERR-ID-000", errMessage, 'id != req.body.id' );
    return false;
  }
  return true;
}
