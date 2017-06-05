import * as ORM from 'sequelize';
import { Sequelize } from 'sequelize';
import { modelOptions } from './model-options';

export function initClasses( sequelize: Sequelize ) {
  return sequelize.define( 'Classes', {
    description: { type: ORM.TEXT },
    duration:   { type: ORM.INTEGER },
    icon:       { type: ORM.STRING, allowNull: true },
    imageUrl:   { type: ORM.STRING, allowNull: true },
    audience:    { type: ORM.TEXT, allowNull: false },
    summary:    { type: ORM.TEXT, allowNull: false },
    tags:       { type: ORM.STRING },
    title:      { type: ORM.STRING, allowNull: false }
  }, modelOptions );
}
