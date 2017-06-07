export interface IClass {
  id: number;
  description: string;
  duration: number;
  icon?: string;
  imageUrl?: string;
  summary: string;
  audience: string;
  tags?: string;
  title: string;
}

export function createNewClass( {id, description, duration, icon, imageUrl, audience, summary, tags, title}: any ): any {
  return { description, duration, icon, imageUrl, audience, summary, tags, title }
}
export function createClass( {id, description, duration, icon, imageUrl, audience, summary, tags, title}: any ): IClass {
  return { id, description, duration, icon, imageUrl, audience, summary, tags, title }
}

export function createClasses( obj: any[] ): IClass[] {
  return obj.map( createClass );
}

