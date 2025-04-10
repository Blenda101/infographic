"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var classSchema = new mongoose_1.Schema({
    day: String,
    code: String,
    myCode: String,
    time: String,
    room: String,
    name: String,
    TI: String,
    sec: String,
    subSec: String,
    lab: {
        type: Boolean,
        "default": false
    }
});
var classSchedule = (0, mongoose_1.model)('class', classSchema);
exports["default"] = classSchedule;
