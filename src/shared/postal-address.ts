
export interface IPostalAddress {
  id: number;
  city?: string;
  label: string;
  pobox?: string;
  postalCode?: string;
  state?: string;
  street1?: string;
  street2?: string;
}

export function createAddress( { id, city, label, pobox, postalCode, state, street1, street2}: any )
: IPostalAddress {
  return { id, city, label, pobox, postalCode, state, street1, street2};
}

export function createAddresses( data: any[] ): IPostalAddress[] {
  return data.map( createAddress );
}
