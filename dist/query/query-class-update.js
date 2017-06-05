"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var classes_1 = require("../shared/classes");
function queryClassUpdate(classEntry) {
    return model_1.Classes.update(classEntry, { where: { id: classEntry.id } })
        .then(classes_1.createClass);
}
exports.queryClassUpdate = queryClassUpdate;
