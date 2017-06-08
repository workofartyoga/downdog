"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var person_1 = require("../../shared/person");
function queryPersonFindById(id) {
    return model_1.People.findById(id)
        .then(person_1.createPerson);
}
exports.queryPersonFindById = queryPersonFindById;
