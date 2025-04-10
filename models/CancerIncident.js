"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var infoGraphicCancerIncidentSchema = new mongoose_1.Schema({
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
    diseaseLabelFemale: String
});
var InfoGraphicCancerIncident = (0, mongoose_1.model)('infoGraphicCancerIncident', infoGraphicCancerIncidentSchema);
exports["default"] = InfoGraphicCancerIncident;
