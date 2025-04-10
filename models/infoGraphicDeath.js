"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var infoGraphicDeathSchema = new mongoose_1.Schema({
    Condition: String,
    Topic: String,
    ICD_Sub_Chapter_Code: String,
    ICD_Sub_Chapter: String,
    Locationdesc: String,
    Locationabbr: String,
    State_Code: String,
    Year: String,
    Year_Code: String,
    Ten_Year_Age_Groups: String,
    ageGroup: String,
    Gender: String,
    Race: String,
    Race_Code: String,
    Deaths: String,
    DeathsInNumber: Number,
    Population: String,
    PopulationInNumber: Number,
    Crude_Rate: String,
    CrudeRateInNumber: Number
});
var InfoGraphicDeath = (0, mongoose_1.model)('infoGraphicDeath', infoGraphicDeathSchema);
exports["default"] = InfoGraphicDeath;
