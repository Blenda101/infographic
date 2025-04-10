"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var allCancerSchema = new mongoose_1.Schema({
    Year: String,
    Locationabbr: String,
    Locationdesc: String,
    Topic: String,
    Gender: String,
    ageGroup: String,
    ageLabel: String,
    Race: String,
    Count: String,
    CountInNumber: Number,
    Population: String,
    PopulationInNumber: Number,
    CrudeRate: String,
    CrudeRateInNumber: Number,
    diseaseLabelMale: String,
    diseaseLabelFemale: String,
    type: String,
    cnt: Number
});
var AllCancer = (0, mongoose_1.model)('allCancer', allCancerSchema);
exports["default"] = AllCancer;
