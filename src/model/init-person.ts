import * as ORM from 'Sequelize';
import {Sequelize} from 'Sequelize';
import { modelOptions } from './model-options';

export function initPerson( sequelize: Sequelize ) {

  return sequelize.define( 'Person', {
    alias:      { type: ORM.STRING, allowNull: true },
    avatarUrl:  { type: ORM.STRING, allowNull: true, validate: { isUrl: true } },
    bio:        { type: ORM.TEXT },
    email:      { type: ORM.STRING, allowNull: false, validate: { isEmail: true } },
    firstName:  { type: ORM.STRING, allowNull: false },
    icon:       { type: ORM.STRING, allowNull: true, validate: { isUrl: true } },
    imageUrl:   { type: ORM.STRING },
    label:      { type: ORM.STRING, allowNull: false, defaultValue: 'person' },
    lastName:   { type: ORM.STRING, allowNull: false },
    middleName: { type: ORM.STRING },
    phone:      { type: ORM.STRING, allowNull: true, validate: { isNumeric: true } },
    prefix:     { type: ORM.STRING },
    suffix:     { type: ORM.STRING },
    summary:    { type: ORM.TEXT },
    website:    { type: ORM.STRING, allowNull: true, validate: { isUrl: true } }
  }, modelOptions);
}
