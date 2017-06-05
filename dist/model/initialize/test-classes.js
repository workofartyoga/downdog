"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_model_error_1 = require("../handle-model-error");
var model_1 = require("../model");
function testClasses() {
    return model_1.Classes.bulkCreate([
        {
            title: "Chill",
            audience: "Beginner class",
            description: "A sequence designed with beginners in mind. The vibe will ease you into your body to enjoy each " +
                "moment as we explore various poses. The teacher will spend more time demonstrating and assisting.",
            duration: 75,
            icon: "",
            imageUrl: "",
            label: "",
            summary: "A chill vibe to ease you into your practice.",
            tags: "yoga, asana, warrior, child, downdog",
        }, {
            title: "Power",
            audience: "Advanced class",
            description: "An active sequence designed to exhaust the primal built up energies. The vibe will at first ease you" +
                " into your body to enjoy each moment. As we get deeper into the class we will amp up the energy as you get " +
                "moving. The teacher offer guidance and minimize time on demonstrating and assisting. There will be time to " +
                "exploring synchronized moves within a group and time to move freely on your mat.",
            duration: 75,
            icon: "",
            imageUrl: "",
            label: "",
            summary: "A flowing and energized vibe to guide you home.",
            tags: "yoga, asana, warrior, child, downdog",
        }
    ]).catch(_.partial(handle_model_error_1.handleModelError, "TEST-CLASSES-SETUP"));
}
exports.testClasses = testClasses;

//# sourceMappingURL=test-classes.js.map
