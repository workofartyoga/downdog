import * as ORM from 'sequelize';
import {Sequelize} from 'sequelize';
import { modelOptions } from './model-options';

export function initAddress( sequelize: Sequelize ) {
  return sequelize.define( 'Address', {
    city:       { type: ORM.STRING },
    label:      { type: ORM.STRING, allowNull: false },
    pobox:      { type: ORM.STRING },
    postalCode: { type: ORM.STRING },
    state:      { type: ORM.STRING },
    street1:    { type: ORM.STRING },
    street2:    { type: ORM.STRING },
  }, modelOptions);
}
