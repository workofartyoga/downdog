
import { createLogger } from './common/create-logger';
import { Request, Response, NextFunction } from 'express';


const log = createLogger('handle-rest-error');
export function handleRestError(err: any, req: Request, res: Response, next: NextFunction ) {
  log.error( err );
  res.status(500).json({error:"Server Error"});
}
