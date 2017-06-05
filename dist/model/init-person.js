"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
var model_options_1 = require("./model-options");
function initPerson(sequelize) {
    return sequelize.define('Person', {
        alias: { type: ORM.STRING, allowNull: true },
        bio: { type: ORM.TEXT },
        email: { type: ORM.STRING, allowNull: false, validate: { isEmail: true } },
        firstName: { type: ORM.STRING, allowNull: false },
        imageUrl: { type: ORM.STRING },
        lastName: { type: ORM.STRING, allowNull: false },
        phone: { type: ORM.STRING, allowNull: true },
        website: { type: ORM.STRING, allowNull: true }
    }, model_options_1.modelOptions);
}
exports.initPerson = initPerson;

//# sourceMappingURL=init-person.js.map
