"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var person_1 = require("../shared/person");
function queryPersonUpdate(id, person) {
    return model_1.People.update(person, { where: { id: person.id } })
        .then(person_1.createPerson);
}
exports.queryPersonUpdate = queryPersonUpdate;
