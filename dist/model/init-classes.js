"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
var model_options_1 = require("./model-options");
function initClasses(sequelize) {
    return sequelize.define('Classes', {
        description: { type: ORM.TEXT },
        duration: { type: ORM.INTEGER },
        icon: { type: ORM.STRING, allowNull: true },
        imageUrl: { type: ORM.STRING, allowNull: true },
        audience: { type: ORM.TEXT, allowNull: false },
        summary: { type: ORM.TEXT, allowNull: false },
        tags: { type: ORM.STRING },
        title: { type: ORM.STRING, allowNull: false }
    }, model_options_1.modelOptions);
}
exports.initClasses = initClasses;

//# sourceMappingURL=init-classes.js.map
