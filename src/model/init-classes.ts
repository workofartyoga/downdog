import * as ORM from 'Sequelize';
import { Sequelize } from 'Sequelize';
import { modelOptions } from './model-options';

export function initClasses( sequelize: Sequelize ) {

  return sequelize.define( 'Classes', {
    description: { type: ORM.TEXT },
    duration:   { type: ORM.NUMBER },
    icon:       { type: ORM.STRING, allowNull: true, validate: { isUrl: true } },
    imageUrl:   { type: ORM.STRING },
    label:      { type: ORM.STRING, allowNull: false, defaultValue: 'person' },
    summary:    { type: ORM.TEXT },
    tags:       { type: ORM.STRING },
    title:      { type: ORM.TEXT }
  }, modelOptions );
}
