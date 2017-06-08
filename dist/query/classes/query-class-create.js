"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var classes_1 = require("../../shared/classes");
function queryClassCreate(classEntry) {
    return model_1.Classes.create(classEntry)
        .then(classes_1.createClass);
}
exports.queryClassCreate = queryClassCreate;
