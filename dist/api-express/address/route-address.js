"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var handle_address_find_all_1 = require("./handle-address-find-all");
var handle_address_create_1 = require("./handle-address-create");
var handle_address_find_by_id_1 = require("./handle-address-find-by-id");
var handle_address_update_1 = require("./handle-address-update");
function routeAddress() {
    var router = express.Router();
    router.get('', handle_address_find_all_1.handleAddressFindAll);
    router.get('/:id', handle_address_find_by_id_1.handleAddressFindById);
    router.post('', handle_address_create_1.handleAddressCreate);
    router.patch('/:id', handle_address_update_1.handleAddressUpdate);
    return router;
}
exports.routeAddress = routeAddress;
