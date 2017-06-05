"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
var model_options_1 = require("./model-options");
function initAddress(sequelize) {
    return sequelize.define('Address', {
        city: { type: ORM.STRING },
        label: { type: ORM.STRING, allowNull: false },
        pobox: { type: ORM.STRING },
        postalCode: { type: ORM.STRING },
        state: { type: ORM.STRING },
        street1: { type: ORM.STRING },
        street2: { type: ORM.STRING },
    }, model_options_1.modelOptions);
}
exports.initAddress = initAddress;

//# sourceMappingURL=init-address.js.map
