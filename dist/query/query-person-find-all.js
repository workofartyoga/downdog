"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var person_1 = require("../shared/person");
function queryPersonFindAll() {
    return model_1.People.findAll({ order: ['lastName', 'firstName'] })
        .then(person_1.createPeople);
}
exports.queryPersonFindAll = queryPersonFindAll;
