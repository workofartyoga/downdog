const hri = require('human-readable-ids').hri;

import { IErrorMessage } from './shared/error-message';

export function createErrorMessage( errCode: string, message: string ): IErrorMessage {
  return { ids: hri.random(), errCode, message };
}
