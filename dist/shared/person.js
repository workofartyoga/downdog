"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createNewPerson(_a) {
    var id = _a.id, alias = _a.alias, bio = _a.bio, email = _a.email, firstName = _a.firstName, imageUrl = _a.imageUrl, lastName = _a.lastName, phone = _a.phone, website = _a.website;
    return { alias: alias, bio: bio, email: email, firstName: firstName, imageUrl: imageUrl, lastName: lastName,
        phone: phone, website: website };
}
exports.createNewPerson = createNewPerson;
function createPerson(_a) {
    var id = _a.id, alias = _a.alias, bio = _a.bio, email = _a.email, firstName = _a.firstName, imageUrl = _a.imageUrl, lastName = _a.lastName, phone = _a.phone, website = _a.website;
    return { id: id, alias: alias, bio: bio, email: email, firstName: firstName, imageUrl: imageUrl, lastName: lastName,
        phone: phone, website: website };
}
exports.createPerson = createPerson;
function createPeople(obj) {
    return obj.map(createPerson);
}
exports.createPeople = createPeople;
