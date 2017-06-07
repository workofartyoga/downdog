"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var classes_1 = require("../shared/classes");
function queryClassFindAll() {
    return model_1.Classes.findAll({ order: ['title'] })
        .then(classes_1.createClasses);
}
exports.queryClassFindAll = queryClassFindAll;
