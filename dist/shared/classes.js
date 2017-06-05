"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createClass(_a) {
    var id = _a.id, description = _a.description, duration = _a.duration, icon = _a.icon, imageUrl = _a.imageUrl, audience = _a.audience, summary = _a.summary, tags = _a.tags, title = _a.title;
    return { id: id, description: description, duration: duration, icon: icon, imageUrl: imageUrl, audience: audience, summary: summary, tags: tags, title: title };
}
exports.createClass = createClass;
function createClasses(obj) {
    return obj.map(createClass);
}
exports.createClasses = createClasses;
