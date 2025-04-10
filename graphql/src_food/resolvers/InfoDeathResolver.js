"use strict";
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
var infoGraphicDeath_1 = require("../../../models/infoGraphicDeath");
var fs_1 = require("fs");
var FotmatedData_1 = require("../schemas/FotmatedData");
var ReturnInfoData_1 = require("../schemas/ReturnInfoData");
var Compare_1 = require("../schemas/Compare");
var stateAndAbbreviations_1 = require("../../../utils/stateAndAbbreviations");
var allcancer_1 = require("../../../models/allcancer");
var InfoDeathResolver = /** @class */ (function () {
    function InfoDeathResolver() {
    }
    InfoDeathResolver.prototype.hJKNBd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, allcancer_1["default"].updateMany({
                            Locationdesc: 'United States (comparable to ICD-O-2)'
                        }, {
                            Locationabbr: 'United States'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    InfoDeathResolver.prototype.csvConverter2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var csvFilePath, jsonArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        csvFilePath = './temp/x.csv';
                        return [4 /*yield*/, (0, csvtojson_1["default"])().fromFile(csvFilePath)];
                    case 1:
                        jsonArray = _a.sent();
                        fs_1["default"].writeFileSync('./temp/all/x.json', JSON.stringify(jsonArray));
                        console.log('');
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    InfoDeathResolver.prototype.csvConverter3 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var csvFilePath, jsonArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        csvFilePath = './temp/cancer_death2.csv';
                        return [4 /*yield*/, (0, csvtojson_1["default"])().fromFile(csvFilePath)];
                    case 1:
                        jsonArray = _a.sent();
                        fs_1["default"].writeFileSync('./temp/infoData7.json', JSON.stringify(jsonArray));
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    InfoDeathResolver.prototype.changeRaceParam = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, infoGraphicDeath_1["default"].updateMany({
                            Topic: "Alzheimer's Disease"
                        }, {
                            Topic: 'Alzheimer'
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, infoGraphicDeath_1["default"].updateMany({
                                Topic: 'Cardiovascular Disease'
                            }, {
                                Topic: 'Cardiovascular'
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, infoGraphicDeath_1["default"].updateMany({
                                Topic: 'Kidney Disease'
                            }, {
                                Topic: 'Kidney'
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    InfoDeathResolver.prototype.infoDeathModification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = JSON.parse(fs_1["default"].readFileSync('./temp/infoData4.json', 'utf-8'));
                console.log(data[0]);
                // await InfoGraphicCancerIncidentModel.deleteMany({});
                // {
                //   'Leading Cancer Sites': 'Brain and Other Nervous System',
                //   'Leading Cancer Sites Code': '31010-31040',
                //   States: 'California',
                //   'States Code': '6',
                //   Year: '2019',
                //   'Year Code': '2019',
                //   'Age Groups': '60-64 years',
                //   'Age Groups Code': '60-64',
                //   Sex: 'Female',
                //   'Sex Code': 'F',
                //   Count: '30',
                //   Population: '309880',
                //   'Crude Rate': '9.7',
                //   Race: 'Hispanic',
                //   'Race Code': ''
                // }
                // let allData = [];
                // for (let i = 0; i < data.length; i++) {
                //   if (data[i].Population === 'Not Applicable') {
                //     continue;
                //   }
                //   let newData: any = {
                //     Year: data[i].Year,
                //     Locationabbr: getStateAbbreviation(data[i].States),
                //     Locationdesc: data[i].States,
                //     Topic: data[i].cer,
                //     Gender: data[i].Sex,
                //     ageGroup: data[i]['Age UI'],
                //     ageLabel: data[i]['Age UI'],
                //     Race: data[i].Race,
                //     Count: data[i].Count,
                //     CountInNumber: Number(data[i].Count),
                //     Population: data[i].Population,
                //     PopulationInNumber: Number(data[i].Population.replace(',', '')),
                //     CrudeRate: data[i]['Crude Rate'],
                //     CrudeRateInNumber: Number(data[i]['Crude Rate'].replace(',', '')),
                //   };
                //   if (data[i].Sex === 'Male') {
                //     newData.diseaseLabelMale = data[i].cer;
                //     newData.diseaseLabelFemale = null;
                //   } else {
                //     newData.diseaseLabelMale = null;
                //     newData.diseaseLabelFemale = data[i].cer;
                //   }
                //   allData.push(newData);
                // }
                // await InfoGraphicCancerIncidentModel.insertMany(allData);
                return [2 /*return*/, 'done'];
            });
        });
    };
    InfoDeathResolver.prototype.infoDeathModification2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, allData, i, newData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = JSON.parse(fs_1["default"].readFileSync('./temp/all/x.json', 'utf-8'));
                        allData = [];
                        //959075
                        for (i = 558198; i < data.length; i++) {
                            newData = {
                                Year: data[i].YEAR,
                                Locationabbr: (0, stateAndAbbreviations_1["default"])(data[i].AREA),
                                Locationdesc: data[i].AREA,
                                Topic: data[i].SITE,
                                Gender: data[i].SEX,
                                Race: data[i].RACE,
                                Count: data[i].COUNT,
                                CountInNumber: Number(data[i].COUNT) ? Number(data[i].COUNT) : 0,
                                Population: data[i].POPULATION,
                                PopulationInNumber: Number(data[i].POPULATION)
                                    ? Number(data[i].POPULATION)
                                    : 0,
                                CrudeRate: data[i].CRUDE_RATE,
                                CrudeRateInNumber: Number(data[i].CRUDE_RATE)
                                    ? Number(data[i].CRUDE_RATE)
                                    : 0,
                                cnt: i
                            };
                            if (data[i].SEX === 'Male') {
                                newData.diseaseLabelMale = data[i].SITE;
                                newData.diseaseLabelFemale = null;
                            }
                            else {
                                newData.diseaseLabelMale = null;
                                newData.diseaseLabelFemale = data[i].SITE;
                            }
                            if (data[i].EVENT_TYPE === 'Incidence') {
                                newData.type = data[i].EVENT_TYPE;
                            }
                            else {
                                newData.type = 'Death';
                            }
                            console.log(i);
                            allData.push(newData);
                        }
                        return [4 /*yield*/, allcancer_1["default"].insertMany(allData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    InfoDeathResolver.prototype.getAllTopics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var topics, maleTopics, femaleTopics, data, i;
            return __generator(this, function (_a) {
                topics = [];
                maleTopics = [];
                femaleTopics = [];
                data = JSON.parse(fs_1["default"].readFileSync('./temp/all/x.json', 'utf-8'));
                for (i = 0; i < data.length; i++) {
                    if (!topics.includes(data[i].RACE)) {
                        topics.push(data[i].RACE);
                    }
                    // if (data[i].SEX === 'Male') {
                    //   if (!maleTopics.includes(data[i].SITE)) {
                    //     maleTopics.push(data[i].SITE);
                    //   }
                    // } else if (data[i].SEX === 'Female') {
                    //   if (!femaleTopics.includes(data[i].SITE)) {
                    //     femaleTopics.push(data[i].SITE);
                    //   }
                    // }
                }
                console.log(topics.length);
                return [2 /*return*/, topics.sort()];
            });
        });
    };
    // @Query(() => String)
    // async modifyDeathData() {
    //   let allData = await InfoGraphicDeathModel.find().limit(30000);
    //   for (let i = 0; i < allData.length; i++) {
    //     let DeathsInNumber;
    //     let populationInNumber;
    //     let CrudeRateInNumber;
    //     if (allData[i].Crude_Rate === 'Unreliable') {
    //       DeathsInNumber = Number(allData[i].Deaths);
    //       populationInNumber = Number(allData[i].Population);
    //       CrudeRateInNumber = 0;
    //     } else {
    //       DeathsInNumber = Number(allData[i].Deaths);
    //       populationInNumber = Number(allData[i].Population);
    //       CrudeRateInNumber = Number(allData[i].Crude_Rate)
    //     }
    //     await InfoGraphicDeathModel.findByIdAndUpdate(allData[i]._id, {
    //       Locationabbr: getStateAbbreviation(data[i].States),
    //       Locationdesc: data[i].States,
    //       Topic: data[i]['Leading Cancer Sites'],
    //       Gender: String,
    //       ageGroup: String,
    //       Race: String,
    //       Count: String,
    //       CountInNumber: Number,
    //       Population: String,
    //       PopulationInNumber: Number,
    //       CrudeRate: String,
    //       CrudeRateInNumber: Number,
    //     };
    //     if (data[i]['Crude Rate'] === 'Unreliable') {
    //       newData.CrudeRateInNumber = 0;
    //     } else {
    //       newData.CrudeRateInNumber = Number(data[i]['Crude Rate']);
    //     }
    //   }
    //   // await InfoGraphicDeathModel.insertMany(allData);
    //   return 'done';
    // }
    // @Query(() => String)
    // async modifyDeathData() {
    //   let allData = await InfoGraphicDeathModel.find().skip(29999);
    //   let topics: any[] = [];
    //   for (let i = 0; i < allData.length; i++) {
    //     if (topics.includes(allData[i].Condition)) {
    //       topics.push(allData[i].Condition);
    //     }
    //     let DeathsInNumber;
    //     let PopulationInNumber;
    //     let CrudeRateInNumber;
    //     if (allData[i].Crude_Rate === 'Unreliable') {
    //       DeathsInNumber = Number(allData[i].Deaths);
    //       PopulationInNumber = Number(allData[i].Population);
    //       CrudeRateInNumber = 0;
    //     } else {
    //       DeathsInNumber = Number(allData[i].Deaths);
    //       PopulationInNumber = Number(allData[i].Population);
    //       CrudeRateInNumber = Number(allData[i].Crude_Rate);
    //     }
    //     await InfoGraphicDeathModel.findByIdAndUpdate(allData[i]._id, {
    //       DeathsInNumber: DeathsInNumber,
    //       PopulationInNumber: PopulationInNumber,
    //       CrudeRateInNumber: CrudeRateInNumber,
    //     });
    //     console.log(i);
    //   }
    //   return 'done';
    // }
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
    // @Query(() => String)
    // async modifyDataOverall() {
    //   await OverAllModel.deleteMany({});
    //   let allData: any = await InfoGraphic.find({
    //     Break_Out_Category: 'Overall',
    //   });
    //   console.log(allData.length);
    //   for (let i = 0; i < allData.length; i++) {
    //     let data = {
    //       Year: allData[i].Year,
    //       Locationabbr: allData[i].Locationabbr,
    //       Locationdesc: allData[i].Locationdesc,
    //       Class: allData[i].Class,
    //       Topic: allData[i].Topic,
    //       Break_Out: allData[i].Break_Out,
    //       Break_Out_Category: allData[i].Break_Out_Category,
    //       Category: allData[i].Category,
    //       Sample_Size: allData[i].Sample_Size,
    //       Sample_Size_Number: allData[i].Sample_Size_Number,
    //       Data_value: allData[i].Data_value,
    //       Data_value_Number: allData[i].Data_value_Number,
    //       Actual_Data_Value_Number: allData[i].Actual_Data_Value_Number,
    //       Confidence_limit_Low: allData[i].Confidence_limit_Low,
    //       Confidence_limit_High: allData[i].Confidence_limit_High,
    //       Data_value_unit: allData[i].Data_value_unit,
    //     };
    //     await OverAllModel.create(data);
    //     console.log(i);
    //   }
    //   return 'done';
    // }
    // @Query(() => String)
    // async storeData() {
    //   const data: any = JSON.parse(
    //     fs.readFileSync('./temp/infoData.json', 'utf-8')
    //   );
    //   for (let i = 89521; i < data.length; i++) {
    //     await InfoGraphic.create(data[i]);
    //   }
    //   return 'done';
    // }
    // @Query(() => String)
    // async storeData() {
    //   const data: any = JSON.parse(
    //     fs.readFileSync('./temp/infoData2.json', 'utf-8')
    //   );f
    //   for (let i = 0; i < data.length; i++) {
    //     await InfoGraphic.create({
    //       Condition: data[i].Condition,
    //       ICD_Sub_Chapter_Code: data[i]['ICD Sub-Chapter Code'],
    //       State: data[i].State,
    //       State_Code: data[i]['State Code'],
    //       Year: data[i].Year,
    //       Year_Code: data[i]['Year Code'],
    //       Ten_Year_Age_Groups: data[i]['Ten-Year Age Groups'],
    //       Ten_Year_Age_Groups_Code: data[i]['Ten-Year Age Groups Code'],
    //       Gender: data[i].Gender,
    //       Race: data[i].Race,
    //       Race_Code: data[i]['Race Code'],
    //       Deaths: data[i].Deaths,
    //       Population: data[i].Population,
    //       Crude_Rate: data[i]['Crude Rate'],
    //       Crude_Rate_Lower_95percent_Confidence_Interval:
    //         data[i]['Crude Rate Lower 95% Confidence Interval'],
    //       Crude_Rate_Upper_95percent_Confidence_Interval:
    //         data[i]['Crude Rate Upper 95% Confidence Interval'],
    //       Percentage_of_Total_Deaths: data[i]['% of Total Deaths'],
    //     });
    //     console.log(i);
    //   }
    //   return 'done';
    // }
    // @Mutation(() => String)
    // async deleteData() {
    //   await InfoGraphic.deleteMany({});
    //   return 'done';
    // }
    // @Query(() => String)
    // async filterData() {
    //   let data = await InfoGraphic.find({
    //     topic: 'Depression',
    //     Year: '2011',
    //   }).select('_id year');
    //   console.log(data.length);
    //   return 'done';
    // }
    // @Query(() => String)
    // async readFile() {
    //   const data = JSON.parse(fs.readFileSync('./temp/infoData.json', 'utf-8'));
    //   let educationAttainedCategory: any[] = [];
    //   let overAllCategory: any[] = [];
    //   let houseHoldIncomeCategory: any[] = [];
    //   let ageGroupCategory: any[] = [];
    //   let raceCategory: any[] = [];
    //   let genderCategory: any[] = [];
    //   // [
    //   //   "Education Attained",
    //   //   "Overall",
    //   //   "Household Income",
    //   //   "Age Group",
    //   //   "Race/Ethnicity",
    //   //   "Gender"
    //   // ]
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i].Break_Out_Category === 'Education Attained') {
    //       if (!educationAttainedCategory.includes(data[i].Break_Out)) {
    //         educationAttainedCategory.push(data[i].Break_Out);
    //       }
    //     } else if (data[i].Break_Out_Category === 'Overall') {
    //       if (!overAllCategory.includes(data[i].Break_Out)) {
    //         overAllCategory.push(data[i].Break_Out);
    //       }
    //     } else if (data[i].Break_Out_Category === 'Household Income') {
    //       if (!houseHoldIncomeCategory.includes(data[i].Break_Out)) {
    //         houseHoldIncomeCategory.push(data[i].Break_Out);
    //       }
    //     } else if (data[i].Break_Out_Category === 'Age Group') {
    //       if (!ageGroupCategory.includes(data[i].Break_Out)) {
    //         ageGroupCategory.push(data[i].Break_Out);
    //       }
    //     } else if (data[i].Break_Out_Category === 'Race/Ethnicity') {
    //       if (!raceCategory.includes(data[i].Break_Out)) {
    //         raceCategory.push(data[i].Break_Out);
    //       }
    //     } else if (data[i].Break_Out_Category === 'Gender') {
    //       if (!genderCategory.includes(data[i].Break_Out)) {
    //         genderCategory.push(data[i].Break_Out);
    //       }
    //     }
    //   }
    //   console.log('ea', educationAttainedCategory);
    //   console.log('OA', overAllCategory);
    //   console.log('HH', houseHoldIncomeCategory);
    //   console.log('AG', ageGroupCategory);
    //   console.log('RE', raceCategory);
    //   console.log('G', genderCategory);
    //   fs.writeFileSync(
    //     './temp/educationAttainedCategory.json',
    //     JSON.stringify(educationAttainedCategory)
    //   );
    //   fs.writeFileSync(
    //     './temp/overAllCategory.json',
    //     JSON.stringify(overAllCategory)
    //   );
    //   fs.writeFileSync(
    //     './temp/houseHoldIncomeCategory.json',
    //     JSON.stringify(houseHoldIncomeCategory)
    //   );
    //   fs.writeFileSync(
    //     './temp/ageGroupCategory.json',
    //     JSON.stringify(ageGroupCategory)
    //   );
    //   fs.writeFileSync('./temp/raceCategory.json', JSON.stringify(raceCategory));
    //   fs.writeFileSync(
    //     './temp/genderCategory.json',
    //     JSON.stringify(genderCategory)
    //   );
    //   // fs.writeFileSync('./temp/years.json', JSON.stringify(years));
    //   // fs.writeFileSync('./temp/locations.json', JSON.stringify(locations));
    //   // fs.writeFileSync('./temp/topics.json', JSON.stringify(topics));
    //   //fs.writeFileSync('./temp/breakOuts.json', JSON.stringify(breakOuts));
    //   //fs.writeFileSync('./temp/breakOutsCategory.json', JSON.stringify(breakOutCategory));
    //   // fs.writeFileSync('./temp/locationDesc.json', JSON.stringify(locationDesc));
    //   return '';
    // }
    InfoDeathResolver.prototype.showInfoData2 = function (year, state) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, data, total1, forMatedData1, data2, total2, forMatedData2, data3, total3, forMatedData3, data4, total4, forMatedData4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                                        value: { $sum: '$DeathsInNumber' }
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
                        total1 = data.reduce(function (acc, d) {
                            acc += d.sampleSize;
                            return acc;
                        }, 0);
                        forMatedData1 = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (100 / total1) * d.sampleSize
                            };
                        });
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Race'
                                },
                                {
                                    $group: {
                                        _id: '$Race',
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' }
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
                        total2 = data2.reduce(function (acc, d) {
                            acc += d.sampleSize;
                            return acc;
                        }, 0);
                        forMatedData2 = data2.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (100 / total2) * d.sampleSize
                            };
                        });
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$ageGroup'
                                },
                                {
                                    $group: {
                                        _id: '$ageGroup',
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' }
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
                        total3 = data3.reduce(function (acc, d) {
                            acc += d.sampleSize;
                            return acc;
                        }, 0);
                        forMatedData3 = data3.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (100 / total3) * d.sampleSize
                            };
                        });
                        return [4 /*yield*/, infoGraphicDeath_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Gender'
                                },
                                {
                                    $group: {
                                        _id: '$Gender',
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' }
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
                        total4 = data4.reduce(function (acc, d) {
                            acc += d.sampleSize;
                            return acc;
                        }, 0);
                        forMatedData4 = data4.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (100 / total4) * d.sampleSize
                            };
                        });
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
    InfoDeathResolver.prototype.yearBasedAggregation2 = function (disease, state, race, age, sex) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, data, total1, forMatedData1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                                        value: { $sum: '$DeathsInNumber' }
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
                        total1 = data.reduce(function (acc, d) {
                            acc += d.sampleSize;
                            return acc;
                        }, 0);
                        forMatedData1 = data.map(function (d) {
                            return {
                                _id: d._id,
                                sampleSize: d.sampleSize,
                                value: d.value,
                                percentage: (100 / total1) * d.sampleSize
                            };
                        });
                        return [2 /*return*/, forMatedData1];
                }
            });
        });
    };
    InfoDeathResolver.prototype.getCompareData2 = function (disease, type, race, age, sex, state) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, group, unwind, years, formateData, i, data, forMatedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        group = {
                            sampleSize: { $sum: '$PopulationInNumber' },
                            value: { $sum: '$DeathsInNumber' }
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
                        console.log(group);
                        console.log(obj);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < years.length)) return [3 /*break*/, 4];
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
                }
            });
        });
    };
    InfoDeathResolver.prototype.getStateData2 = function (year, disease, race, age, sex) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, data, forMatedData, returnObj, sortedArray, length, t25, t50, t75, lowest, highest, i, returnData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        else {
                            obj.Topic = 'Alzheimer & Dementia';
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
                                    $unwind: '$Locationabbr'
                                },
                                {
                                    $group: {
                                        _id: '$Locationabbr',
                                        fullForm: { $first: '$Locationdesc' },
                                        sampleSize: { $sum: '$PopulationInNumber' },
                                        value: { $sum: '$DeathsInNumber' }
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
                        length = sortedArray.length;
                        t25 = (25 / 100) * (length + 1);
                        t50 = (50 / 100) * (length + 1);
                        t75 = (75 / 100) * (length + 1);
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
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], InfoDeathResolver.prototype, "hJKNBd");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], InfoDeathResolver.prototype, "csvConverter2");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], InfoDeathResolver.prototype, "csvConverter3");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], InfoDeathResolver.prototype, "changeRaceParam");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], InfoDeathResolver.prototype, "infoDeathModification");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], InfoDeathResolver.prototype, "infoDeathModification2");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [String]; })
    ], InfoDeathResolver.prototype, "getAllTopics");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ReturnInfoData_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true }))
    ], InfoDeathResolver.prototype, "showInfoData2");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [FotmatedData_1["default"]]; }),
        __param(0, (0, type_graphql_1.Arg)('disease', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('sex', { nullable: true }))
    ], InfoDeathResolver.prototype, "yearBasedAggregation2");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [Compare_1["default"]]; }),
        __param(0, (0, type_graphql_1.Arg)('disease', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('type')),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('sex', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('state', { nullable: true }))
    ], InfoDeathResolver.prototype, "getCompareData2");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('disease', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('sex', { nullable: true }))
    ], InfoDeathResolver.prototype, "getStateData2");
    InfoDeathResolver = __decorate([
        (0, type_graphql_1.Resolver)()
    ], InfoDeathResolver);
    return InfoDeathResolver;
}());
exports["default"] = InfoDeathResolver;
