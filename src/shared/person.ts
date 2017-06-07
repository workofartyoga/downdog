

export interface IPerson {
  id: number;
  alias: string;
  bio: string;
  email: string;
  firstName: string;
  imageUrl: string;
  lastName: string;
  phone: string;
  website: string;
}

export function createNewPerson( { id, alias, bio, email, firstName, imageUrl, lastName,
                                phone, website }: any): any {
  return { alias, bio, email, firstName, imageUrl, lastName,
    phone, website };
}

export function createPerson( { id, alias, bio, email, firstName, imageUrl, lastName,
                                phone, website }: any): IPerson {
  return { id, alias, bio, email, firstName, imageUrl, lastName,
     phone, website };
}

export function createPeople( obj: any[] ): IPerson[] {
  return obj.map( createPerson );
}
