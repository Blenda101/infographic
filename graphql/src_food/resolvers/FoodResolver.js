"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var csvtojson_1 = require("csvtojson");
var infoGraphic_1 = require("../../../models/infoGraphic");
var Overall_1 = require("../../../models/Overall");
var fs_1 = require("fs");
var FotmatedData_1 = require("../schemas/FotmatedData");
var ReturnInfoData_1 = require("../schemas/ReturnInfoData");
var class_1 = require("../../../models/class");
var myClass_1 = require("../schemas/myClass");
var Compare_1 = require("../schemas/Compare");
var infoGraphicDeath_1 = require("../../../models/infoGraphicDeath");
//https://blending101-infographic.vercel.app/
var FoodResolver = /** @class */ (function () {
    function FoodResolver() {
    }
    FoodResolver.prototype.csvConverter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var csvFilePath, jsonArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        csvFilePath = './temp/cancer.csv';
                        return [4 /*yield*/, (0, csvtojson_1["default"])().fromFile(csvFilePath)];
                    case 1:
                        jsonArray = _a.sent();
                        fs_1["default"].writeFileSync('./temp/infoData3.json', JSON.stringify(jsonArray));
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    FoodResolver.prototype.modifyData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allData, i, sampleSizeInNumber, dataValueInNumber, actualDataValueInNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, infoGraphic_1["default"].find().skip(50000)];
                    case 1:
                        allData = _a.sent();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < allData.length)) return [3 /*break*/, 5];
                        sampleSizeInNumber = void 0;
                        dataValueInNumber = void 0;
                        actualDataValueInNumber = void 0;
                        if (allData[i].Data_value === '') {
                            sampleSizeInNumber = Number(allData[i].Sample_Size);
                            dataValueInNumber = 0;
                            actualDataValueInNumber = 0;
                        }
                        else if (allData[i].Sample_Size === '0') {
                            if (allData[i].Data_value === '') {
                                sampleSizeInNumber = 0;
                                dataValueInNumber = 0;
                                actualDataValueInNumber = 0;
                            }
                            else {
                                sampleSizeInNumber = 0;
                                dataValueInNumber = 0;
                                actualDataValueInNumber = 0;
                            }
                        }
                        else {
                            sampleSizeInNumber = Number(allData[i].Sample_Size);
                            dataValueInNumber = Number(allData[i].Data_value);
                            actualDataValueInNumber =
                                (dataValueInNumber / 100) * sampleSizeInNumber;
                        }
                        return [4 /*yield*/, infoGraphic_1["default"].findByIdAndUpdate(allData[i]._id, {
                                Actual_Data_Value_Number: actualDataValueInNumber
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, 'done'];
                }
            });
        });
    };
    // @Query(() => String)
    // async modifyData2() {
    //   let allData = await InfoGraphic.find();
    //   for (let i = 0; i < allData.length; i++) {
    //     let sampleSizeInNumber;
    //     let dataValueInNumber;
    //     let actualDataValueInNumber;
    //     let Category;
    //     if (allData[i].Data_value === '') {
    //       sampleSizeInNumber = Number(allData[i].Sample_Size);
    //       dataValueInNumber = 0;
    //       actualDataValueInNumber = 0;
    //     } else if (allData[i].Sample_Size === '0') {
    //       if (allData[i].Data_value === '') {
    //         sampleSizeInNumber = 0;
    //         dataValueInNumber = 0;
    //         actualDataValueInNumber = 0;
    //       } else {
    //         sampleSizeInNumber = 0;
    //         dataValueInNumber = 0;
    //         actualDataValueInNumber = 0;
    //       }
    //     } else {
    //       sampleSizeInNumber = Number(allData[i].Sample_Size);
    //       dataValueInNumber = Number(allData[i].Data_value);
    //       actualDataValueInNumber =
    //         (100 / dataValueInNumber) * sampleSizeInNumber;
    //     }
    //     if (allData[i].Break_Out_Category === 'Race/Ethnicity') {
    //       if (
    //         allData[i].Break_Out ===
    //           'Native Hawaiian or other Pacific Islander, non-Hispanic' ||
    //         allData[i].Break_Out ===
    //           'American Indian or Alaskan Native, non-Hispanic' ||
    //         allData[i].Break_Out === 'Multiracial, non-Hispanic' ||
    //         allData[i].Break_Out === 'Other, non-Hispanic'
    //       ) {
    //         Category = 'Other';
    //       } else if (allData[i].Break_Out === 'Hispanic') {
    //         Category = 'Hispanic';
    //       } else if (allData[i].Break_Out === 'White, non-Hispanic') {
    //         Category = 'White';
    //       } else if (allData[i].Break_Out === 'Black, non-Hispanic') {
    //         Category = 'Black';
    //       } else if (allData[i].Break_Out === 'Asian, non-Hispanic') {
    //         Category = 'Asian';
    //       }
    //     } else {
    //       Category = allData[i].Break_Out;
    //     }
    //     await InfoGraphic.findByIdAndUpdate(allData[i]._id, {
    //       Sample_Size_Number: sampleSizeInNumber,
    //       Data_value_Number: dataValueInNumber,
    //       Actual_Data_Value_Number: actualDataValueInNumber,
    //       Category,
    //     });
    //     if (i % 1000 === 0) {
    //       console.log(i);
    //     }
    //   }
    //   return 'done';
    // }
    FoodResolver.prototype.modifyDataOverall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allData, i, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Overall_1["default"].deleteMany({})];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, infoGraphic_1["default"].find({
                                Break_Out_Category: 'Overall'
                            })];
                    case 2:
                        allData = _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < allData.length)) return [3 /*break*/, 6];
                        data = {
                            Year: allData[i].Year,
                            Locationabbr: allData[i].Locationabbr,
                            Locationdesc: allData[i].Locationdesc,
                            Class: allData[i].Class,
                            Topic: allData[i].Topic,
                            Break_Out: allData[i].Break_Out,
                            Break_Out_Category: allData[i].Break_Out_Category,
                            Category: allData[i].Category,
                            Sample_Size: allData[i].Sample_Size,
                            Sample_Size_Number: allData[i].Sample_Size_Number,
                            Data_value: allData[i].Data_value,
                            Data_value_Number: allData[i].Data_value_Number,
                            Actual_Data_Value_Number: allData[i].Actual_Data_Value_Number,
                            Confidence_limit_Low: allData[i].Confidence_limit_Low,
                            Confidence_limit_High: allData[i].Confidence_limit_High,
                            Data_value_unit: allData[i].Data_value_unit
                        };
                        return [4 /*yield*/, Overall_1["default"].create(data)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, 'done'];
                }
            });
        });
    };
    FoodResolver.prototype.storeData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = JSON.parse(fs_1["default"].readFileSync('./temp/infoData3.json', 'utf-8'));
                console.log(data[0]);
                // for (let i = 0; i < data.length; i++) {
                //   await InfoGraphic.create({
                //     Condition: data[i].Condition,
                //     ICD_Sub_Chapter_Code: data[i]['ICD Sub-Chapter Code'],
                //     State: data[i].State,
                //     State_Code: data[i]['State Code'],
                //     Year: data[i].Year,
                //     Year_Code: data[i]['Year Code'],
                //     Ten_Year_Age_Groups: data[i]['Ten-Year Age Groups'],
                //     Ten_Year_Age_Groups_Code: data[i]['Ten-Year Age Groups Code'],
                //     Gender: data[i].Gender,
                //     Race: data[i].Race,
                //     Race_Code: data[i]['Race Code'],
                //     Deaths: data[i].Deaths,
                //     Population: data[i].Population,
                //     Crude_Rate: data[i]['Crude Rate'],
                //     Crude_Rate_Lower_95percent_Confidence_Interval:
                //       data[i]['Crude Rate Lower 95% Confidence Interval'],
                //     Crude_Rate_Upper_95percent_Confidence_Interval:
                //       data[i]['Crude Rate Upper 95% Confidence Interval'],
                //     Percentage_of_Total_Deaths: data[i]['% of Total Deaths'],
                //   });
                // }
                return [2 /*return*/, 'done'];
            });
        });
    };
    FoodResolver.prototype.showInfoData = function (year, state, disease, race, age, sex, dataSet) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, diseaseObj, model, data, forMatedData1, raceObj, data2, forMatedData2, ageObj, data3, forMatedData3, genderObj, data4, forMatedData4, obj, data, forMatedData1, raceObj, data2, forMatedData2, ageObj, data3, forMatedData3, genderObj, data4, forMatedData4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(dataSet === 'incidence' || !dataSet)) return [3 /*break*/, 5];
                        obj = {};
                        if (year) {
                            obj.Year = year;
                        }
                        else {
                            obj.Year = '2021';
                        }
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        diseaseObj = __assign({}, obj);
                        if (race) {
                            diseaseObj.Category = race;
                        }
                        if (age) {
                            diseaseObj.Category = age;
                        }
                        if (sex) {
                            diseaseObj.Category = sex;
                        }
                        model = void 0;
                        if (diseaseObj.Category) {
                            model = infoGraphic_1["default"];
                        }
                        else {
                            model = Overall_1["default"];
                        }
                        return [4 /*yield*/, model.aggregate([
                                {
                                    $match: diseaseObj
                                },
                                {
                                    $unwind: '$Topic'
                                },
                                {
                                    $group: {
                                        _id: '$Topic',
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 1:
                        data = _a.sent();
                        forMatedData1 = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        raceObj = __assign(__assign({}, obj), { Break_Out_Category: 'Race/Ethnicity' });
                        if (disease) {
                            raceObj.Topic = disease;
                        }
                        else {
                            raceObj.Topic = 'Arthritis';
                        }
                        return [4 /*yield*/, infoGraphic_1["default"].aggregate([
                                {
                                    $match: raceObj
                                },
                                {
                                    $unwind: '$Category'
                                },
                                {
                                    $group: {
                                        _id: '$Category',
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 2:
                        data2 = _a.sent();
                        forMatedData2 = data2.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        ageObj = __assign(__assign({}, obj), { Break_Out_Category: 'Age Group' });
                        if (disease) {
                            ageObj.Topic = disease;
                        }
                        else {
                            ageObj.Topic = 'Arthritis';
                        }
                        return [4 /*yield*/, infoGraphic_1["default"].aggregate([
                                {
                                    $match: ageObj
                                },
                                {
                                    $unwind: '$Break_Out'
                                },
                                {
                                    $group: {
                                        _id: '$Break_Out',
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 3:
                        data3 = _a.sent();
                        forMatedData3 = data3.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        genderObj = __assign(__assign({}, obj), { Break_Out_Category: 'Gender' });
                        if (disease) {
                            genderObj.Topic = disease;
                        }
                        else {
                            genderObj.Topic = 'Arthritis';
                        }
                        return [4 /*yield*/, infoGraphic_1["default"].aggregate([
                                {
                                    $match: genderObj
                                },
                                {
                                    $unwind: '$Break_Out'
                                },
                                {
                                    $group: {
                                        _id: '$Break_Out',
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 4:
                        data4 = _a.sent();
                        forMatedData4 = data4.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        return [2 /*return*/, {
                                diseases: forMatedData1,
                                race: forMatedData2,
                                age: forMatedData3,
                                sex: forMatedData4
                            }];
                    case 5:
                        obj = {};
                        if (year) {
                            obj.Year = year;
                        }
                        else {
                            obj.Year = '2020';
                        }
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        if (race) {
                            obj.Race = race;
                        }
                        if (age) {
                            obj.ageGroup = age;
                        }
                        if (sex) {
                            obj.Gender = sex;
                        }
                        console.log(obj);
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Topic'
                                },
                                {
                                    $group: {
                                        _id: '$Topic',
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' },
                                        totalCrudeRate: { $sum: '$CrudeRateInNumber' },
                                        numerator: {
                                            $sum: {
                                                $multiply: ['$CrudeRateInNumber', '$PopulationInNumber']
                                            }
                                        }
                                    }
                                },
                                {
                                    $project: {
                                        _id: '$_id',
                                        sampleSize: '$sampleSize',
                                        value: '$value',
                                        totalCrudeRate: '$totalCrudeRate',
                                        percentage: { $divide: ['$numerator', '$sampleSize'] }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 6:
                        data = _a.sent();
                        if (disease) {
                            obj.Topic = disease;
                        }
                        forMatedData1 = data;
                        raceObj = __assign({}, obj);
                        if (race) {
                            delete raceObj.Race;
                        }
                        console.log(raceObj);
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: raceObj
                                },
                                {
                                    $unwind: '$Race'
                                },
                                {
                                    $group: {
                                        _id: '$Race',
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' },
                                        totalCrudeRate: { $sum: '$CrudeRateInNumber' },
                                        numerator: {
                                            $sum: {
                                                $multiply: ['$CrudeRateInNumber', '$PopulationInNumber']
                                            }
                                        }
                                    }
                                },
                                {
                                    $project: {
                                        _id: '$_id',
                                        sampleSize: '$sampleSize',
                                        value: '$value',
                                        totalCrudeRate: '$totalCrudeRate',
                                        percentage: { $divide: ['$numerator', '$sampleSize'] }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 7:
                        data2 = _a.sent();
                        forMatedData2 = data2;
                        ageObj = __assign({}, obj);
                        if (age) {
                            delete ageObj.ageGroup;
                        }
                        console.log(ageObj);
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: ageObj
                                },
                                {
                                    $unwind: '$ageGroup'
                                },
                                {
                                    $group: {
                                        _id: '$ageGroup',
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' },
                                        totalCrudeRate: { $sum: '$CrudeRateInNumber' },
                                        numerator: {
                                            $sum: {
                                                $multiply: ['$CrudeRateInNumber', '$PopulationInNumber']
                                            }
                                        }
                                    }
                                },
                                {
                                    $project: {
                                        _id: '$_id',
                                        sampleSize: '$sampleSize',
                                        value: '$value',
                                        totalCrudeRate: '$totalCrudeRate',
                                        percentage: { $divide: ['$numerator', '$sampleSize'] }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 8:
                        data3 = _a.sent();
                        forMatedData3 = data3;
                        genderObj = __assign({}, obj);
                        if (genderObj.Gender) {
                            delete genderObj.Gender;
                        }
                        console.log(genderObj);
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: genderObj
                                },
                                {
                                    $unwind: '$Gender'
                                },
                                {
                                    $group: {
                                        _id: '$Gender',
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' },
                                        totalCrudeRate: { $sum: '$CrudeRateInNumber' },
                                        numerator: {
                                            $sum: {
                                                $multiply: ['$CrudeRateInNumber', '$PopulationInNumber']
                                            }
                                        }
                                    }
                                },
                                {
                                    $project: {
                                        _id: '$_id',
                                        sampleSize: '$sampleSize',
                                        value: '$value',
                                        totalCrudeRate: '$totalCrudeRate',
                                        percentage: { $divide: ['$numerator', '$sampleSize'] }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 9:
                        data4 = _a.sent();
                        forMatedData4 = data4;
                        return [2 /*return*/, {
                                diseases: forMatedData1,
                                race: forMatedData2,
                                age: forMatedData3,
                                sex: forMatedData4
                            }];
                }
            });
        });
    };
    FoodResolver.prototype.yearBasedAggregation = function (disease, state, race, age, sex, dataSet) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, allYearsData, data, forMatedData1, data, forMatedData1, obj, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(dataSet === 'incidence' || !dataSet)) return [3 /*break*/, 5];
                        obj = {};
                        allYearsData = [];
                        if (disease) {
                            obj.Topic = disease;
                        }
                        else {
                            obj.Topic = 'Arthritis';
                        }
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        if (!(race || age || sex)) return [3 /*break*/, 2];
                        if (race) {
                            obj.Category = race;
                        }
                        else if (age) {
                            obj.Category = age;
                        }
                        else {
                            obj.Category = sex;
                        }
                        return [4 /*yield*/, infoGraphic_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Year'
                                },
                                {
                                    $group: {
                                        _id: '$Year',
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 1:
                        data = _a.sent();
                        forMatedData1 = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        return [2 /*return*/, forMatedData1];
                    case 2: return [4 /*yield*/, Overall_1["default"].aggregate([
                            {
                                $match: obj
                            },
                            {
                                $unwind: '$Year'
                            },
                            {
                                $group: {
                                    _id: '$Year',
                                    sampleSize: { $sum: '$Sample_Size_Number' },
                                    value: { $sum: '$Actual_Data_Value_Number' }
                                }
                            },
                            {
                                $sort: {
                                    _id: 1
                                }
                            },
                        ])];
                    case 3:
                        data = _a.sent();
                        forMatedData1 = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        return [2 /*return*/, forMatedData1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        obj = {};
                        // let allYearsData: any[] = [];
                        if (disease) {
                            obj.Topic = disease;
                        }
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        if (race) {
                            obj.Race = race;
                        }
                        if (age) {
                            obj.ageGroup = age;
                        }
                        if (sex) {
                            obj.Gender = sex;
                        }
                        if (Object.keys(obj).length === 0) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Year'
                                },
                                {
                                    $group: {
                                        _id: '$Year',
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' },
                                        numerator: {
                                            $sum: {
                                                $multiply: ['$CrudeRateInNumber', '$PopulationInNumber']
                                            }
                                        }
                                    }
                                },
                                {
                                    $project: {
                                        _id: '$_id',
                                        sampleSize: '$sampleSize',
                                        value: '$value',
                                        totalCrudeRate: '$totalCrudeRate',
                                        percentage: { $divide: ['$numerator', '$sampleSize'] }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 6:
                        data = _a.sent();
                        // let total1 = data.reduce((acc: any, d: any) => {
                        //   acc += d.sampleSize;
                        //   return acc;
                        // }, 0);
                        // let forMatedData1 = data.map((d: any) => {
                        //   return {
                        //     _id: d._id,
                        //     sampleSize: d.sampleSize,
                        //     value: d.value,
                        //     percentage: (100 / total1) * d.sampleSize,
                        //   };
                        // });
                        return [2 /*return*/, data];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FoodResolver.prototype.getCompareData = function (disease, type, race, age, sex, state, dataSet) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, years, formateData, matchObj, i, data, forMatedData, i, data, forMatedData, i, data, forMatedData, obj, group, unwind, years, formateData, i, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(dataSet === 'incidence' || !dataSet)) return [3 /*break*/, 17];
                        obj = {
                            Topic: { $ne: 'Vision' },
                            Break_Out_Category: { $ne: 'Overall' }
                        };
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        years = [
                            '2011',
                            '2012',
                            '2013',
                            '2014',
                            '2015',
                            '2016',
                            '2017',
                            '2018',
                            '2019',
                            '2020',
                            '2021',
                        ];
                        formateData = [];
                        matchObj = {};
                        if (!(type === 'disease')) return [3 /*break*/, 5];
                        matchObj = __assign({}, obj);
                        if (race) {
                            matchObj.Category = race;
                        }
                        else if (sex) {
                            matchObj.Category = sex;
                        }
                        else if (age) {
                            matchObj.Category = age;
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < years.length)) return [3 /*break*/, 4];
                        matchObj.Year = years[i];
                        return [4 /*yield*/, infoGraphic_1["default"].aggregate([
                                {
                                    $match: matchObj
                                },
                                {
                                    $unwind: '$Topic'
                                },
                                {
                                    $group: {
                                        _id: '$Topic',
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 2:
                        data = _a.sent();
                        forMatedData = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        formateData.push({
                            year: years[i],
                            fotmatedData: forMatedData
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, formateData];
                    case 5:
                        if (!(type === 'sex')) return [3 /*break*/, 6];
                        if (!disease) {
                            obj.Topic = 'Arthritis';
                        }
                        else {
                            obj.Topic = disease;
                        }
                        matchObj = __assign(__assign({}, obj), { Break_Out_Category: 'Gender' });
                        return [3 /*break*/, 12];
                    case 6:
                        if (!(type === 'age')) return [3 /*break*/, 7];
                        if (!disease) {
                            obj.Topic = 'Arthritis';
                        }
                        else {
                            obj.Topic = disease;
                        }
                        matchObj = __assign(__assign({}, obj), { Break_Out_Category: 'Age Group' });
                        return [3 /*break*/, 12];
                    case 7:
                        if (!(type === 'race')) return [3 /*break*/, 12];
                        if (!disease) {
                            obj.Topic = 'Arthritis';
                        }
                        else {
                            obj.Topic = disease;
                        }
                        matchObj = __assign(__assign({}, obj), { Break_Out_Category: 'Race/Ethnicity' });
                        i = 0;
                        _a.label = 8;
                    case 8:
                        if (!(i < years.length)) return [3 /*break*/, 11];
                        matchObj.Year = years[i];
                        return [4 /*yield*/, infoGraphic_1["default"].aggregate([
                                {
                                    $match: matchObj
                                },
                                {
                                    $unwind: '$Category'
                                },
                                {
                                    $group: {
                                        _id: '$Category',
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 9:
                        data = _a.sent();
                        forMatedData = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        formateData.push({
                            year: years[i],
                            fotmatedData: forMatedData
                        });
                        _a.label = 10;
                    case 10:
                        i++;
                        return [3 /*break*/, 8];
                    case 11: return [2 /*return*/, formateData];
                    case 12:
                        i = 0;
                        _a.label = 13;
                    case 13:
                        if (!(i < years.length)) return [3 /*break*/, 16];
                        matchObj.Year = years[i];
                        return [4 /*yield*/, infoGraphic_1["default"].aggregate([
                                {
                                    $match: matchObj
                                },
                                {
                                    $unwind: '$Break_Out'
                                },
                                {
                                    $group: {
                                        _id: '$Break_Out',
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 14:
                        data = _a.sent();
                        forMatedData = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0
                            };
                        });
                        formateData.push({
                            year: years[i],
                            fotmatedData: forMatedData
                        });
                        _a.label = 15;
                    case 15:
                        i++;
                        return [3 /*break*/, 13];
                    case 16: return [2 /*return*/, formateData];
                    case 17:
                        obj = {};
                        group = {
                            sampleSize: { $sum: '$PopulationInNumber' },
                            value: { $sum: '$DeathsInNumber' },
                            numerator: {
                                $sum: { $multiply: ['$CrudeRateInNumber', '$PopulationInNumber'] }
                            }
                        };
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        if (race) {
                            obj.Race = race;
                        }
                        if (age) {
                            obj.ageGroup = age;
                        }
                        if (sex) {
                            obj.Gender = sex;
                        }
                        unwind = '';
                        if (type === 'disease') {
                            delete obj.disease;
                            unwind = '$Topic';
                            group._id = '$Topic';
                        }
                        else if (type === 'sex') {
                            delete obj.Gender;
                            unwind = '$Gender';
                            group._id = '$Gender';
                        }
                        else if (type === 'age') {
                            delete obj.ageGroup;
                            unwind = '$ageGroup';
                            group._id = '$ageGroup';
                        }
                        else if (type === 'race') {
                            delete obj.Race;
                            unwind = '$Race';
                            group._id = '$Race';
                        }
                        years = [
                            '2011',
                            '2012',
                            '2013',
                            '2014',
                            '2015',
                            '2016',
                            '2017',
                            '2018',
                            '2019',
                            '2020',
                        ];
                        formateData = [];
                        i = 0;
                        _a.label = 18;
                    case 18:
                        if (!(i < years.length)) return [3 /*break*/, 21];
                        obj.Year = years[i];
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: unwind
                                },
                                {
                                    $group: group
                                },
                                {
                                    $project: {
                                        _id: '$_id',
                                        sampleSize: '$sampleSize',
                                        value: '$value',
                                        totalCrudeRate: '$totalCrudeRate',
                                        percentage: { $divide: ['$numerator', '$sampleSize'] }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 19:
                        data = _a.sent();
                        // let forMatedData = data.map((d: any) => {
                        //   return {
                        //     _id: d._id,
                        //     sampleSize: d.sampleSize,
                        //     value: d.value,
                        //     percentage:
                        //       (+d.value / +d.sampleSize) * 100
                        //         ? (+d.value / +d.sampleSize) * 100
                        //         : 0,
                        //   };
                        // });
                        formateData.push({
                            year: years[i],
                            fotmatedData: data
                        });
                        _a.label = 20;
                    case 20:
                        i++;
                        return [3 /*break*/, 18];
                    case 21: return [2 /*return*/, formateData];
                }
            });
        });
    };
    FoodResolver.prototype.getStateData = function (year, disease, 
    // @Arg('state', { nullable: true }) state: String,
    race, age, sex, dataSet) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, data, forMatedData, returnObj, sortedArray, length_1, t25, t50, t75, lowest, highest, i, returnData, obj, data, forMatedData, returnObj, sortedArray, length_2, t25, t50, t75, lowest, highest, i, returnData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(dataSet === 'incidence' || !dataSet)) return [3 /*break*/, 2];
                        obj = {};
                        if (year) {
                            obj.Year = year;
                        }
                        else {
                            obj.Year = '2021';
                        }
                        if (disease) {
                            obj.Topic = disease;
                        }
                        else {
                            obj.Topic = 'Arthritis';
                        }
                        if (race) {
                            obj.Category = race;
                        }
                        else if (sex) {
                            obj.Category = sex;
                        }
                        else if (age) {
                            obj.Category = age;
                        }
                        return [4 /*yield*/, infoGraphic_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Locationabbr'
                                },
                                {
                                    $group: {
                                        _id: '$Locationabbr',
                                        fullForm: { $first: '$Locationdesc' },
                                        sampleSize: { $sum: '$Sample_Size_Number' },
                                        value: { $sum: '$Actual_Data_Value_Number' }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 1:
                        data = _a.sent();
                        forMatedData = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                fullForm: d.fullForm,
                                percentage: (+d.value / +d.sampleSize) * 100
                                    ? (+d.value / +d.sampleSize) * 100
                                    : 0,
                                prevalence: 0
                            };
                        });
                        returnObj = {};
                        sortedArray = forMatedData.sort(function (data1, data2) { return data1.percentage - data2.percentage; });
                        length_1 = sortedArray.length;
                        t25 = Math.floor((25 / 100) * (length_1 + 1));
                        t50 = Math.floor((50 / 100) * (length_1 + 1));
                        t75 = Math.floor((75 / 100) * (length_1 + 1));
                        lowest = sortedArray[0];
                        highest = sortedArray[sortedArray.length - 1];
                        for (i = 0; i < sortedArray.length; i++) {
                            returnObj[sortedArray[i]._id] = sortedArray[i];
                            if (sortedArray[t75].percentage < sortedArray[i].percentage) {
                                returnObj[sortedArray[i]._id].quartile = 4;
                            }
                            else if (sortedArray[t50].percentage < sortedArray[i].percentage &&
                                sortedArray[t75].percentage <= sortedArray[i].percentage) {
                                returnObj[sortedArray[i]._id].quartile = 3;
                            }
                            else if (sortedArray[t25].percentage < sortedArray[i].percentage &&
                                sortedArray[t50].percentage <= sortedArray[i].percentage) {
                                returnObj[sortedArray[i]._id].quartile = 2;
                            }
                            else {
                                returnObj[sortedArray[i]._id].quartile = 1;
                            }
                        }
                        returnData = {
                            quartile: {
                                0: lowest.percentage,
                                25: sortedArray[t25].percentage,
                                50: sortedArray[t50].percentage,
                                75: sortedArray[t75].percentage,
                                100: highest.percentage
                            },
                            data: returnObj
                        };
                        return [2 /*return*/, JSON.stringify(returnData)];
                    case 2:
                        obj = {};
                        if (year) {
                            obj.Year = year;
                        }
                        else {
                            obj.Year = '2020';
                        }
                        if (disease) {
                            obj.Topic = disease;
                        }
                        if (race) {
                            obj.Race = race;
                        }
                        if (age) {
                            obj.ageGroup = age;
                        }
                        if (sex) {
                            obj.Gender = sex;
                        }
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Locationabbr'
                                },
                                {
                                    $group: {
                                        _id: '$Locationabbr',
                                        fullForm: { $first: '$Locationdesc' },
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' },
                                        numerator: {
                                            $sum: {
                                                $multiply: ['$CrudeRateInNumber', '$PopulationInNumber']
                                            }
                                        }
                                    }
                                },
                                {
                                    $project: {
                                        _id: '$_id',
                                        fullForm: '$fullForm',
                                        sampleSize: '$sampleSize',
                                        value: '$value',
                                        totalCrudeRate: '$totalCrudeRate',
                                        percentage: { $divide: ['$numerator', '$sampleSize'] }
                                    }
                                },
                                {
                                    $sort: {
                                        _id: 1
                                    }
                                },
                            ])];
                    case 3:
                        data = _a.sent();
                        forMatedData = data;
                        returnObj = {};
                        sortedArray = forMatedData.sort(function (data1, data2) { return data1.percentage - data2.percentage; });
                        length_2 = sortedArray.length;
                        t25 = Math.floor((25 / 100) * (length_2 + 1));
                        t50 = Math.floor((50 / 100) * (length_2 + 1));
                        t75 = Math.floor((75 / 100) * (length_2 + 1));
                        lowest = sortedArray[0];
                        highest = sortedArray[sortedArray.length - 1];
                        for (i = 0; i < sortedArray.length; i++) {
                            returnObj[sortedArray[i]._id] = sortedArray[i];
                            if (sortedArray[t75].percentage < sortedArray[i].percentage) {
                                returnObj[sortedArray[i]._id].quartile = 4;
                            }
                            else if (sortedArray[t50].percentage < sortedArray[i].percentage &&
                                sortedArray[t75].percentage <= sortedArray[i].percentage) {
                                returnObj[sortedArray[i]._id].quartile = 3;
                            }
                            else if (sortedArray[t25].percentage < sortedArray[i].percentage &&
                                sortedArray[t50].percentage <= sortedArray[i].percentage) {
                                returnObj[sortedArray[i]._id].quartile = 2;
                            }
                            else {
                                returnObj[sortedArray[i]._id].quartile = 1;
                            }
                        }
                        returnData = {
                            quartile: {
                                0: lowest.percentage,
                                25: sortedArray[t25].percentage,
                                50: sortedArray[t50].percentage,
                                75: sortedArray[t75].percentage,
                                100: highest.percentage
                            },
                            data: returnObj
                        };
                        return [2 /*return*/, JSON.stringify(returnData)];
                }
            });
        });
    };
    FoodResolver.prototype.addClasses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data1 = [
                            {
                                day: 'Tue',
                                code: 'SE225',
                                myCode: 'SWE426',
                                time: '1:30',
                                room: '612',
                                name: 'Distributive Computing and Network Security',
                                TI: 'NIR',
                                sec: 'A'
                            },
                            {
                                day: 'Tue',
                                code: 'SE225',
                                myCode: 'SWE426',
                                time: '2:30',
                                room: '712B',
                                name: 'Distributive Computing and Network Security',
                                TI: 'JNM',
                                sec: 'B'
                            },
                            {
                                day: 'Wed',
                                code: 'SE225',
                                myCode: 'SWE426',
                                time: '1:30',
                                room: '603',
                                name: 'Distributive Computing and Network Security',
                                TI: 'NIR',
                                sec: 'A'
                            },
                            {
                                day: 'Wed',
                                code: 'SE225',
                                myCode: 'SWE426',
                                time: '12:30',
                                room: '1017',
                                name: 'Distributive Computing and Network Security',
                                TI: 'JNM',
                                sec: 'B'
                            },
                            {
                                day: 'Tue',
                                code: 'SE226',
                                myCode: 'SWE426',
                                time: '3:30',
                                room: '609',
                                name: 'Distributive Computing and Network Security',
                                TI: 'JNM',
                                sec: 'B',
                                lab: true
                            },
                            {
                                day: 'Tue',
                                code: 'SE226',
                                myCode: 'SWE426',
                                time: '11:30',
                                room: '601',
                                name: 'Distributive Computing and Network Security',
                                TI: 'SA',
                                sec: 'A',
                                subSec: '1',
                                lab: true
                            },
                            {
                                day: 'Wed',
                                code: 'SE226',
                                myCode: 'SWE426',
                                time: '3:30',
                                room: '616',
                                name: 'Distributive Computing and Network Security',
                                TI: 'SA',
                                sec: 'A',
                                subSec: '2',
                                lab: true
                            },
                            {
                                day: 'Sat',
                                code: 'SE331',
                                myCode: 'SWE332',
                                time: '8:30',
                                room: '610',
                                name: 'Software Engineering Project-II (Web Programming)',
                                TI: 'AKS',
                                sec: 'A',
                                subSec: '2'
                            },
                            {
                                day: 'Sat',
                                code: 'SE331',
                                myCode: 'SWE332',
                                time: '9:30',
                                room: '610',
                                name: 'Software Engineering Project-II (Web Programming)',
                                TI: 'AKS',
                                sec: 'A',
                                subSec: '2'
                            },
                            {
                                day: 'Sun',
                                code: 'SE331',
                                myCode: 'SWE332',
                                time: '8:30',
                                room: '610',
                                name: 'Software Engineering Project-II (Web Programming)',
                                TI: 'MRA',
                                sec: 'A',
                                subSec: '1'
                            },
                            {
                                day: 'Sun',
                                code: 'SE331',
                                myCode: 'SWE332',
                                time: '9:30',
                                room: '610',
                                name: 'Software Engineering Project-II (Web Programming)',
                                TI: 'MRA',
                                sec: 'A',
                                subSec: '1'
                            },
                            {
                                day: 'Tue',
                                code: 'SE331',
                                myCode: 'SWE332',
                                time: '12:30',
                                room: '601',
                                name: 'Software Engineering Project-II (Web Programming)',
                                TI: 'MRA',
                                sec: 'A',
                                subSec: '2'
                            },
                            {
                                day: 'Tue',
                                code: 'SE331',
                                myCode: 'SWE332',
                                time: '1:30',
                                room: '601',
                                name: 'Software Engineering Project-II (Web Programming)',
                                TI: 'MRA',
                                sec: 'A',
                                subSec: '2'
                            },
                            {
                                day: 'Wed',
                                code: 'SE331',
                                myCode: 'SWE332',
                                time: '9:30',
                                room: '610',
                                name: 'Software Engineering Project-II (Web Programming)',
                                TI: 'MSA',
                                sec: 'A',
                                subSec: '1'
                            },
                            {
                                day: 'Wed',
                                code: 'SE331',
                                myCode: 'SWE332',
                                time: '10:30',
                                room: '610',
                                name: 'Software Engineering Project-II (Web Programming)',
                                TI: 'MSA',
                                sec: 'A',
                                subSec: '1'
                            },
                            {
                                day: 'Sun',
                                code: 'GE235',
                                myCode: 'ACC124',
                                time: '2:30',
                                room: '710',
                                name: 'Principles of Accounting',
                                TI: 'MJM',
                                sec: 'A'
                            },
                            {
                                day: 'Sun',
                                code: 'GE235',
                                myCode: 'ACC124',
                                time: '3:30',
                                room: '710',
                                name: 'Principles of Accounting',
                                TI: 'MJM',
                                sec: 'A'
                            },
                            {
                                day: 'Sat',
                                code: 'SE411',
                                myCode: 'SWE212',
                                time: '8:30',
                                room: '603',
                                name: 'Software Project Management',
                                TI: 'AA',
                                sec: 'A'
                            },
                            {
                                day: 'Sat',
                                code: 'SE411',
                                myCode: 'SWE212',
                                time: '9:30',
                                room: '603',
                                name: 'Software Project Management',
                                TI: 'AA',
                                sec: 'A'
                            },
                            {
                                day: 'Sun',
                                code: 'SE411',
                                myCode: 'SWE212',
                                time: '12:30',
                                room: '704',
                                name: 'Software Project Management',
                                TI: 'MKS',
                                sec: 'A'
                            },
                            {
                                day: 'Thu',
                                code: 'SE411',
                                myCode: 'SWE212',
                                time: '1:30',
                                room: '603',
                                name: 'Software Project Management',
                                TI: 'MKS',
                                sec: 'A'
                            },
                        ];
                        return [4 /*yield*/, class_1["default"].insertMany(data1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    FoodResolver.prototype.filterClasses = function (day, code, time, room, name, TI, sec, subSec, lab) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        if (day)
                            obj.day = day;
                        if (code)
                            obj.code = code;
                        if (time)
                            obj.time = time;
                        if (room)
                            obj.room = room;
                        if (name)
                            obj.name = name;
                        if (TI)
                            obj.TI = TI;
                        if (sec)
                            obj.sec = sec;
                        if (subSec)
                            obj.subSec = subSec;
                        if (lab)
                            obj.lab = lab;
                        return [4 /*yield*/, class_1["default"].find(obj).sort({
                                time: 1
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], FoodResolver.prototype, "csvConverter");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], FoodResolver.prototype, "modifyData");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], FoodResolver.prototype, "modifyDataOverall");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], FoodResolver.prototype, "storeData");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ReturnInfoData_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('disease', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('sex', { nullable: true })),
        __param(6, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], FoodResolver.prototype, "showInfoData");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [FotmatedData_1["default"]]; }),
        __param(0, (0, type_graphql_1.Arg)('disease', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('sex', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], FoodResolver.prototype, "yearBasedAggregation");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [Compare_1["default"]]; }),
        __param(0, (0, type_graphql_1.Arg)('disease', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('type')),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('sex', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(6, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], FoodResolver.prototype, "getCompareData");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('disease', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('sex', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], FoodResolver.prototype, "getStateData");
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return String; })
    ], FoodResolver.prototype, "addClasses");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [myClass_1["default"]]; }),
        __param(0, (0, type_graphql_1.Arg)('day', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('code', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('time', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('room', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('name', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('TI', { nullable: true })),
        __param(6, (0, type_graphql_1.Arg)('sec', { nullable: true })),
        __param(7, (0, type_graphql_1.Arg)('subSec', { nullable: true })),
        __param(8, (0, type_graphql_1.Arg)('lab', { nullable: true }))
    ], FoodResolver.prototype, "filterClasses");
    FoodResolver = __decorate([
        (0, type_graphql_1.Resolver)()
    ], FoodResolver);
    return FoodResolver;
}());
exports["default"] = FoodResolver;
