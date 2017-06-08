"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var model_1 = require("../model");
var handle_model_error_1 = require("../handle-model-error");
function testPeople() {
    return model_1.People.bulkCreate([{
            alias: 'Abe',
            email: 'abe@example.com',
            firstName: 'Abraham',
            lastName: 'Muesseltoff',
            phone: '888-555-1212',
            website: 'https://abe.mussletoff.name'
        }, {
            alias: 'Bud',
            email: 'bud@example.com',
            firstName: 'Barry',
            lastName: 'Brenahan',
            phone: '888-555-1234',
            website: 'https://bud.brenahan.name'
        }])
        .catch(_.partial(handle_model_error_1.handleModelError, 'TEST-SETUP-PEOPLE'));
}
exports.testPeople = testPeople;
