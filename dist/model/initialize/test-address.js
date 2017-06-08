"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var model_1 = require("../model");
var handle_model_error_1 = require("../handle-model-error");
function testAddress() {
    return model_1.Addresses.bulkCreate([{
            city: 'Cincinnati',
            label: 'home',
            postalCode: 45230,
            state: 'OH',
            street1: 'Beacon St'
        }, {
            city: 'Cincinnati',
            label: 'work',
            postalCode: 45230,
            state: 'OH',
            street1: 'Plainville St'
        }])
        .catch(_.partial(handle_model_error_1.handleModelError, 'TEST-SETUP-ADDRESS'));
}
exports.testAddress = testAddress;
