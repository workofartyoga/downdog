import * as ORM from 'sequelize';
import {Sequelize} from 'sequelize';
import { modelOptions } from './model-options';

export function initPerson( sequelize: Sequelize ) {

  return sequelize.define( 'Person', {
    alias:      { type: ORM.STRING, allowNull: true },
    bio:        { type: ORM.TEXT },
    email:      { type: ORM.STRING, allowNull: false, validate: { isEmail: true } },
    firstName:  { type: ORM.STRING, allowNull: false },
    imageUrl:   { type: ORM.STRING },
    lastName:   { type: ORM.STRING, allowNull: false },
    phone:      { type: ORM.STRING, allowNull: true },
    website:    { type: ORM.STRING, allowNull: true }
  }, modelOptions);
}
