
import { Request, Response, NextFunction } from 'express';

export function handleRestError(err: any, req: Request, res: Response, next: NextFunction ) {
  req.log.error( err );
  res.status(500).json({error:"Server Error"});
}
