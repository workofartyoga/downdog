
import { Response } from "@angular/http";

export function receiveApiObject(data: Response ): any {
  return data.json().data;
}

export function receiveApiArray(data: Response ): any[] {
  return data.json().data;
}
