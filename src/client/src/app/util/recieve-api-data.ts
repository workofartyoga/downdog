
import { Response } from "@angular/http";

export function receiveApiDatum( data: Response ): any {
  return data.json().data;
}

export function receiveApiData(data: Response ): any[] {
  return data.json().data;
}
