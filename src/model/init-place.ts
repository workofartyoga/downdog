// import * as ORM from 'sequelize';
// import {Sequelize} from 'sequelize';
// import { modelOptions } from './model-options';
//
// export function initPlace( sequelize: Sequelize ) {
//
//   return sequelize.define( 'Place', {
//     name:       { type: ORM.STRING },
//     alias:      { type: ORM.STRING },
//     website:    { type: ORM.STRING, allowNull: true, validate: { isUrl: true} },
//     logoUrl:    { type: ORM.STRING, allowNull: true, validate: { isUrl: true} },
//     email:      { type: ORM.STRING, allowNull: true, validate: { isEmail: true } },
//     telephone:  { type: ORM.STRING },
//     description:{ type: ORM.TEXT },
//     icon:       { type: ORM.STRING, allowNull: true, validate: { isUrl: true } },
//     imageUrl:   { type: ORM.STRING, allowNull: true, validate: { isUrl: true } },
//     label:      { type: ORM.STRING, allowNull: false},
//     summary:    { type: ORM.TEXT },
//     tags:       { type: ORM.STRING },
//     title:      { type: ORM.TEXT }
//   }, modelOptions);
// }
