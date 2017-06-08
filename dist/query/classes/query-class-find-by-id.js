"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var classes_1 = require("../../shared/classes");
function queryClassFindById(id) {
    return model_1.Classes.findById(id)
        .then(classes_1.createClass);
}
exports.queryClassFindById = queryClassFindById;
