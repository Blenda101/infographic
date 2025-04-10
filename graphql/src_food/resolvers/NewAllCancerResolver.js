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
var newAllCancer_1 = require("../../../models/newAllCancer");
var ProportionGender_1 = require("../schemas/ProportionGender");
var ProportionGenderString_1 = require("../schemas/ProportionGenderString");
var ALLYEAR = [
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    // '2015-2019',
    '2016',
    '2017',
    '2018',
    '2019',
];
var allState = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'United States (comparable to ICD-O-2)',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];
var selectedFemaleDiseases1 = [
    'Breast',
    'Colorectal',
    'Kidney',
    'Leukemias',
    'Lung',
    'Melanoma of the Skin',
    'Non-Hodgkin Lymphoma',
    'Oral Cavity and Pharynx',
    'Pancreas',
    'Thyroid',
    'Urinary Bladder', //include Cervix
];
var maleDiseases = [
    'All Cancer',
    'Bladder',
    'Brain',
    'Colorectal',
    'Esophagus',
    'H Lymphoma',
    'Kaposi Sarcoma',
    'Kidney',
    'Larynx',
    'Leukemia',
    'Liver',
    'Lung',
    'Mesothelioma',
    'Mouth & Throat',
    'Myeloma',
    'NH Lymphoma',
    'Pancreas',
    'Prostate',
    'Skin',
    'Stomach',
    'Testis',
    'Thyroid',
];
var femaleDisease1 = [
    'Brain',
    'Breast',
    'Cervix',
    'Colorectal',
    'Corpus Uteri',
    'Esophagus',
    'Gallbladder',
    'Kidney',
    'Larynx',
    'Leukemias',
    'Liver',
    'Lung',
    'Melanoma of the Skin',
    'Myeloma',
    'Non-Hodgkin Lymphoma',
    'Oral Cavity and Pharynx',
    'Ovary',
    'Pancreas',
    'Stomach',
    'Thyroid',
    'Urinary Bladder', //include
];
var femaleDisease = [
    'All Cancer',
    'Bladder',
    'Brain',
    'Cervix',
    'Colorectal',
    'Corpus and Uterus, NOS',
    'Esophagus',
    'Female Breast',
    'Female Breast, in situ',
    'H Lymphoma',
    'Kaposi Sarcoma',
    'Kidney',
    'Larynx',
    'Leukemia',
    'Liver',
    'Lung',
    'Mesothelioma',
    'Mouth & Throat',
    'Myeloma',
    'NH Lymphoma',
    'Ovary',
    'Pancreas',
    'Skin',
    'Stomach',
    'Thyroid',
];
var race = ['All Races', 'Asian', 'Black', 'Hispanic', 'Other', 'White'];
var AllCancerResolver = /** @class */ (function () {
    function AllCancerResolver() {
    }
    AllCancerResolver.prototype.getallCancerProportionMatrix = function (year, state, race, dataSet) {
        return __awaiter(this, void 0, void 0, function () {
            var maleData, femaleData, obj, objMale, objFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        if (year) {
                            obj.Year = year;
                        }
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        // } else {
                        //   if (dataSet === 'Incidence') {
                        //     obj.Locationabbr = 'United States';
                        //   }
                        // }
                        if (race) {
                            obj.Race = race;
                        }
                        else {
                            obj.Race = 'All Races';
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (!(dataSet === 'Incidence')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getProportionByGender(objMale, true)];
                    case 1:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getProportionByGender(objFemale, true)];
                    case 2:
                        femaleData = _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.getProportionByGender(objMale, false)];
                    case 4:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getProportionByGender(objFemale, false)];
                    case 5:
                        femaleData = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, {
                            maleData: maleData,
                            femaleData: femaleData
                        }];
                }
            });
        });
    };
    AllCancerResolver.prototype.getAllCancerTypes = function (year, state, race, dataSet) {
        return __awaiter(this, void 0, void 0, function () {
            var maleData, femaleData, obj, objMale, objFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        if (year) {
                            obj.Year = year;
                        }
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        // else {
                        //   if (dataSet === 'Incidence') {
                        //     obj.Locationabbr = 'United States';
                        //   }
                        // }
                        if (race) {
                            obj.Race = race;
                        }
                        else {
                            obj.Race = 'All Races';
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (!(dataSet === 'Incidence')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCancerTypesByGender(objMale, true, true)];
                    case 1:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getCancerTypesByGender(objFemale, false, true)];
                    case 2:
                        femaleData = _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.getCancerTypesByGender(objMale, true, false)];
                    case 4:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getCancerTypesByGender(objFemale, false, false)];
                    case 5:
                        femaleData = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, {
                            maleData: maleData,
                            femaleData: femaleData
                        }];
                }
            });
        });
    };
    AllCancerResolver.prototype.getAllCancerRaceData = function (year, state, maleDisease, femaleDisease, dataSet) {
        return __awaiter(this, void 0, void 0, function () {
            var maleData, femaleData, obj, objMale, objFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        if (year) {
                            obj.Year = year;
                        }
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        if (maleDisease) {
                            objMale.diseaseLabelMale = maleDisease;
                        }
                        else {
                            objMale.diseaseLabelMale = 'All Cancer';
                        }
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (femaleDisease) {
                            objFemale.diseaseLabelFemale = femaleDisease;
                        }
                        else {
                            objFemale.diseaseLabelFemale = 'All Cancer';
                        }
                        if (!(dataSet === 'Incidence')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getRaceDataByGender(objMale, true, true)];
                    case 1:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getRaceDataByGender(objFemale, false, true)];
                    case 2:
                        femaleData = _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.getRaceDataByGender(objMale, true, false)];
                    case 4:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getRaceDataByGender(objFemale, false, false)];
                    case 5:
                        femaleData = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, {
                            maleData: maleData,
                            femaleData: femaleData
                        }];
                }
            });
        });
    };
    AllCancerResolver.prototype.getYearBasedAggregationForAllCancer = function (state, race, dataSet, maleDisease, femaleDisease) {
        return __awaiter(this, void 0, void 0, function () {
            var maleData, femaleData, obj, objMale, objFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        // else {
                        //   if (dataSet === 'Incidence') {
                        //     if (dataSet === 'Incidence') {
                        //       obj.Locationabbr = 'United States';
                        //     }
                        //   }
                        // }
                        if (race) {
                            obj.Race = race;
                        }
                        else {
                            obj.Race = 'All Races';
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        if (maleDisease) {
                            objMale.diseaseLabelMale = maleDisease;
                        }
                        else {
                            objMale.diseaseLabelMale = 'All Cancer';
                        }
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (femaleDisease) {
                            objFemale.diseaseLabelFemale = femaleDisease;
                        }
                        else {
                            objFemale.diseaseLabelFemale = 'All Cancer';
                        }
                        if (!(dataSet === 'Incidence')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getYearData(objMale, true)];
                    case 1:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getYearData(objFemale, true)];
                    case 2:
                        femaleData = _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.getYearData(objMale, false)];
                    case 4:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getYearData(objFemale, false)];
                    case 5:
                        femaleData = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, {
                            maleData: maleData,
                            femaleData: femaleData
                        }];
                }
            });
        });
    };
    AllCancerResolver.prototype.getStateDataForAllCancer = function (year, race, maleDisease, femaleDisease, dataSet) {
        return __awaiter(this, void 0, void 0, function () {
            var maleData, femaleData, obj, objMale, objFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        if (year) {
                            obj.Year = year;
                        }
                        if (race) {
                            obj.Race = race;
                        }
                        else {
                            obj.Race = 'All Races';
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        if (maleDisease) {
                            objMale.diseaseLabelMale = maleDisease;
                        }
                        else {
                            objMale.diseaseLabelMale = 'All Cancer';
                        }
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (maleDisease) {
                            objFemale.diseaseLabelFemale = femaleDisease;
                        }
                        else {
                            objFemale.diseaseLabelFemale = 'All Cancer';
                        }
                        if (!(dataSet === 'Incidence')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getStateDataByGender(objMale, true, true)];
                    case 1:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getStateDataByGender(objFemale, false, true)];
                    case 2:
                        femaleData = _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.getStateDataByGender(objMale, true, false)];
                    case 4:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getStateDataByGender(objFemale, false, false)];
                    case 5:
                        femaleData = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, {
                            maleData: maleData,
                            femaleData: femaleData
                        }];
                }
            });
        });
    };
    AllCancerResolver.prototype.getStateDataByGender = function (obj, isMale, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var data, total, i, percentage, forMatedData, returnObj, sortedArray, length, t25, t50, t75, lowest, highest, i, returnData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj.type = 'Incidence';
                        obj.Locationabbr = { $ne: 'United States' };
                        if (!isIncident) {
                            obj.type = 'Mortality';
                        }
                        return [4 /*yield*/, newAllCancer_1["default"].aggregate([
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
                                        totalPopulation: { $sum: '$PopulationInNumber' },
                                        totalCount: { $sum: '$CountInNumber' },
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
                                        fullForm: '$fullForm',
                                        totalPopulation: '$totalPopulation',
                                        totalCount: '$totalCount',
                                        totalCrudeRate: '$totalCrudeRate',
                                        weightedAverage: { $divide: ['$numerator', '$totalPopulation'] }
                                    }
                                },
                                {
                                    $sort: {
                                        sort: 1
                                    }
                                },
                            ])];
                    case 1:
                        data = _a.sent();
                        total = data.reduce(function (acc, d) {
                            acc += d.totalCount;
                            return acc;
                        }, 0);
                        for (i = 0; i < data.length; i++) {
                            if (data[i].totalCount === 0) {
                                data[i].percentage = 0;
                                continue;
                            }
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        if (data.length === 0 || data.length < 5) {
                            return [2 /*return*/, JSON.stringify({})];
                        }
                        forMatedData = data;
                        returnObj = {};
                        sortedArray = forMatedData.sort(function (data1, data2) { return data1.weightedAverage - data2.weightedAverage; });
                        length = sortedArray.length;
                        t25 = Math.floor((25 / 100) * (length + 1));
                        t50 = Math.floor((50 / 100) * (length + 1));
                        t75 = Math.floor((75 / 100) * (length + 1));
                        lowest = sortedArray[0];
                        highest = sortedArray[sortedArray.length - 1];
                        for (i = 1; i < sortedArray.length - 1; i++) {
                            returnObj[sortedArray[i]._id] = sortedArray[i];
                            if (sortedArray[t75].weightedAverage < sortedArray[i].weightedAverage) {
                                returnObj[sortedArray[i]._id].quartile = 4;
                            }
                            else if (sortedArray[t50].weightedAverage < sortedArray[i].weightedAverage &&
                                sortedArray[t75].weightedAverage <= sortedArray[i].weightedAverage) {
                                returnObj[sortedArray[i]._id].quartile = 3;
                            }
                            else if (sortedArray[t25].weightedAverage < sortedArray[i].weightedAverage &&
                                sortedArray[t50].weightedAverage <= sortedArray[i].weightedAverage) {
                                returnObj[sortedArray[i]._id].quartile = 2;
                            }
                            else {
                                returnObj[sortedArray[i]._id].quartile = 1;
                            }
                        }
                        returnData = {
                            quartile: {
                                0: lowest.weightedAverage,
                                25: sortedArray[t25].weightedAverage,
                                50: sortedArray[t50].weightedAverage,
                                75: sortedArray[t75].weightedAverage,
                                100: highest.weightedAverage
                            },
                            data: returnObj
                        };
                        // console.log(Object.keys(returnData.data));
                        // console.log(returnData.quartile);
                        return [2 /*return*/, JSON.stringify(returnData)];
                }
            });
        });
    };
    AllCancerResolver.prototype.getYearData = function (obj, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var data, total, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj.type = 'Incidence';
                        obj.Year = { $ne: '2016-2020' };
                        if (!isIncident) {
                            obj.type = 'Mortality';
                        }
                        return [4 /*yield*/, newAllCancer_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $group: {
                                        _id: '$Year',
                                        totalPopulation: { $sum: '$PopulationInNumber' },
                                        totalCount: { $sum: '$CountInNumber' },
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
                                        totalPopulation: '$totalPopulation',
                                        totalCount: '$totalCount',
                                        totalCrudeRate: '$totalCrudeRate',
                                        weightedAverage: {
                                            $divide: ['$numerator', '$totalPopulation']
                                        }
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
                        // console.log(data);
                        if (data.length === 0) {
                            return [2 /*return*/, []];
                        }
                        total = data.reduce(function (acc, d) {
                            acc += d.totalCount;
                            return acc;
                        }, 0);
                        for (i = 0; i < data.length; i++) {
                            if (data[i].totalCount === 0) {
                                data[i].percentage = 0;
                                continue;
                            }
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    AllCancerResolver.prototype.getRaceDataByGender = function (obj, male, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var data, total, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj.type = 'Incidence';
                        obj.Race = { $ne: 'All Races' };
                        if (!isIncident) {
                            obj.type = 'Mortality';
                        }
                        return [4 /*yield*/, newAllCancer_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Race'
                                },
                                {
                                    $group: {
                                        _id: '$Race',
                                        totalPopulation: { $sum: '$PopulationInNumber' },
                                        totalCount: { $sum: '$CountInNumber' },
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
                                        totalPopulation: '$totalPopulation',
                                        totalCount: '$totalCount',
                                        totalCrudeRate: '$totalCrudeRate',
                                        weightedAverage: { $divide: ['$numerator', '$totalPopulation'] }
                                    }
                                },
                                {
                                    $sort: {
                                        sort: 1
                                    }
                                },
                            ])];
                    case 1:
                        data = _a.sent();
                        if (data.length === 0) {
                            return [2 /*return*/, []];
                        }
                        total = data.reduce(function (acc, d) {
                            acc += d.totalCount;
                            return acc;
                        }, 0);
                        for (i = 0; i < data.length; i++) {
                            if (data[i].totalCount === 0) {
                                data[i].percentage = 0;
                                continue;
                            }
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    AllCancerResolver.prototype.getCancerTypesByGender = function (obj, male, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var unwindValue, data, total, maleDisease, femaleDisease, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj.type = 'Incidence';
                        obj.Topic = { $ne: 'All Cancer' };
                        if (!isIncident) {
                            obj.type = 'Mortality';
                        }
                        unwindValue = '';
                        if (obj.Gender === 'Male') {
                            unwindValue = '$diseaseLabelMale';
                        }
                        else {
                            unwindValue = '$diseaseLabelFemale';
                        }
                        return [4 /*yield*/, newAllCancer_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$Topic'
                                },
                                {
                                    $group: {
                                        _id: '$Topic',
                                        totalPopulation: { $sum: '$PopulationInNumber' },
                                        totalCount: { $sum: '$CountInNumber' },
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
                                        totalPopulation: '$totalPopulation',
                                        totalCount: '$totalCount',
                                        totalCrudeRate: '$totalCrudeRate',
                                        weightedAverage: { $divide: ['$numerator', '$totalPopulation'] }
                                    }
                                },
                                {
                                    $sort: {
                                        weightedAverage: -1
                                    }
                                },
                            ])];
                    case 1:
                        data = _a.sent();
                        if (data.length === 0) {
                            return [2 /*return*/, []];
                        }
                        total = data.reduce(function (acc, d) {
                            acc += d.totalCount;
                            return acc;
                        }, 0);
                        maleDisease = [];
                        femaleDisease = [];
                        if (isIncident) {
                            maleDisease = [
                                'Colorectal',
                                'Kidney',
                                'Leukemias',
                                'Lung',
                                'Skin',
                                'Lymphoma',
                                'Oral',
                                'Pancreas',
                                'Prostate',
                                'Bladder',
                            ];
                            femaleDisease = [
                                'Breast',
                                'Colorectal',
                                'Kidney',
                                'Leukemias',
                                'Lung',
                                'Skin',
                                'Lymphoma',
                                'Pancreas',
                                'Thyroid',
                                'Cervix',
                            ];
                        }
                        else {
                            maleDisease = [
                                'Bladder',
                                'Brain',
                                'Colorectal',
                                'Esophagus',
                                'Leukemias',
                                'Liver',
                                'Lung',
                                'Lymphoma',
                                'Pancreas',
                                'Prostate',
                            ];
                            femaleDisease = [
                                'Brain',
                                'Breast',
                                'Cervix',
                                'Colorectal',
                                'Leukemias',
                                'Liver',
                                'Lung',
                                'Lymphoma',
                                'Ovary',
                                'Pancreas',
                            ];
                        }
                        for (i = 0; i < data.length; i++) {
                            if (male) {
                                if (!maleDisease.includes(data[i]._id)) {
                                    data.splice(i, 1);
                                    i--;
                                    continue;
                                }
                            }
                            else {
                                if (!femaleDisease.includes(data[i]._id)) {
                                    data.splice(i, 1);
                                    i--;
                                    continue;
                                }
                            }
                            if (data[i].totalCount === 0) {
                                data[i].percentage = 0;
                                continue;
                            }
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        data = data.sort(function (a, b) { return a.percentage - b.percentage; });
                        return [2 /*return*/, data];
                }
            });
        });
    };
    AllCancerResolver.prototype.tuttrus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, newAllCancer_1["default"].updateMany({
                            diseaseLabelMale: 'Leukemias',
                            Gender: 'Male'
                        }, {
                            Topic: 'Leukemias'
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, newAllCancer_1["default"].updateMany({
                                diseaseLabelFemale: 'Leukemias',
                                Gender: 'Female'
                            }, {
                                Topic: 'Leukemias'
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, newAllCancer_1["default"].updateMany({
                                diseaseLabelMale: 'Lymphoma',
                                Gender: 'Male'
                            }, {
                                Topic: 'Lymphoma'
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, newAllCancer_1["default"].updateMany({
                                diseaseLabelFemale: 'Lymphoma',
                                Gender: 'Female'
                            }, {
                                Topic: 'Lymphoma'
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, newAllCancer_1["default"].updateMany({
                                diseaseLabelMale: 'Oral',
                                Gender: 'Male'
                            }, {
                                Topic: 'Oral'
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, newAllCancer_1["default"].updateMany({
                                Gender: 'Female',
                                diseaseLabelFemale: 'Oral'
                            }, {
                                Topic: 'Oral'
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, newAllCancer_1["default"].updateMany({
                                diseaseLabelFemale: 'Breast',
                                Gender: 'Female'
                            }, {
                                Topic: 'Breast'
                            })];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, 'Done'];
                }
            });
        });
    };
    AllCancerResolver.prototype.getProportionByGender = function (obj, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var unwindValue, maleData, maleTotal, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj.type = 'Incidence';
                        obj.Topic = 'All Cancer';
                        if (!isIncident) {
                            obj.type = 'Mortality';
                        }
                        unwindValue = '';
                        if (obj.Gender === 'Male') {
                            unwindValue = '$diseaseLabelMale';
                        }
                        else {
                            unwindValue = '$diseaseLabelFemale';
                        }
                        return [4 /*yield*/, newAllCancer_1["default"].aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: unwindValue
                                },
                                {
                                    $group: {
                                        _id: unwindValue,
                                        totalPopulation: { $sum: '$PopulationInNumber' },
                                        totalCount: { $sum: '$CountInNumber' },
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
                                        totalPopulation: '$totalPopulation',
                                        totalCount: '$totalCount',
                                        totalCrudeRate: '$totalCrudeRate',
                                        weightedAverage: { $divide: ['$numerator', '$totalPopulation'] }
                                    }
                                },
                            ])];
                    case 1:
                        maleData = _a.sent();
                        if (maleData.length === 0) {
                            return [2 /*return*/, []];
                        }
                        maleTotal = maleData.reduce(function (acc, d) {
                            acc += d.totalCount;
                            return acc;
                        }, 0);
                        for (i = 0; i < maleData.length; i++) {
                            if (maleData[i].totalCount === 0) {
                                maleData[i].percentage = 0;
                                continue;
                            }
                            percentage = (100 * maleData[i].totalCount) / maleTotal;
                            maleData[i].percentage = percentage;
                        }
                        return [2 /*return*/, maleData];
                }
            });
        });
    };
    AllCancerResolver.prototype.changeLeukemia = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, newAllCancer_1["default"].updateMany({
                            SITE: 'Leukemias',
                            Gender: "Male"
                        }, {
                            diseaseLabelMale: 'Leukemias'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'doen'];
                }
            });
        });
    };
    AllCancerResolver.prototype.newDataImport = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //NOTE: add data from csv to json
                // const csvFilePath = './temp/all_cancer.csv';
                // const jsonArray = await csv().fromFile(csvFilePath);
                // fs.writeFileSync('./temp/newAllCancer.json', JSON.stringify(jsonArray));
                //NOTE: Parse Data and check
                // const data = JSON.parse(
                //   fs.readFileSync('./temp/newAllCancer.json', 'utf-8')
                // );
                // console.log(data.length);
                // console.log(data[0]);
                // // await NewAllCancer.deleteMany();
                // let allData = [];
                // for (let i = 128938; i < data.length; i++) {
                //   console.log('hello' + data[i].Count + 'HI');
                //   console.log(data[i].Count == '~');
                //   let obj = {
                //     Locationdesc: data[i].AREA, //ok
                //     AGE_ADJUSTED_CI_LOWER: data[i].AGE_ADJUSTED_CI_LOWER,
                //     AGE_ADJUSTED_CI_UPPER: data[i].AGE_ADJUSTED_CI_UPPER,
                //     AGE_ADJUSTED_RATE: data[i].AGE_ADJUSTED_RATE,
                //     CrudeRateInNumber: Number(data[i].CRUDE_RATE), // ok
                //     Count: data[i].COUNT, // OK
                //     CountInNumber: Number(data[i].COUNT) ? Number(data[i].COUNT) : 0, //OK
                //     type: data[i].EVENT_TYPE, //OK
                //     Population: data[i].POPULATION, //OK
                //     PopulationInNumber: Number(data[i].POPULATION), //OK
                //     Race: data[i]['Race UI'], // OK
                //     Race_Origin: data[i].RACE, // OK
                //     Gender: data[i].SEX, // OK
                //     SITE: data[i].SITE, //OK
                //     Year: data[i].YEAR, // OK
                //     CRUDE_CI_LOWER: data[i].CRUDE_CI_LOWER,
                //     CRUDE_CI_UPPER: data[i].CRUDE_CI_UPPER,
                //     CrudeRate: data[i].CRUDE_RATE, // OK
                //     Locationabbr: data[i].Locationabbr, // OK
                //     Topic: data[i]['SITE UI'], //OK
                //     RACE_UI: data[i]['Race UI'],
                //     cnt: i,
                //     diseaseLabelMale: data[i].SEX === 'Male' ? data[i]['SITE UI'] : null,
                //     diseaseLabelFemale:
                //       data[i].SEX === 'Female' ? data[i]['SITE UI'] : null,
                //   };
                //   console.log(i);
                //   allData.push(obj);
                // }
                // await NewAllCancer.insertMany(allData);
                // let data = await NewAllCancer.find({
                //   CountInNumber: 0,
                //   Count: { $ne: '0' },
                // });
                // for (let i = 0; i < data.length; i++) {
                //   await NewAllCancer.findOneAndUpdate(
                //     { _id: data[i]._id },
                //     {
                //       CountInNumber: +data[i].Count,
                //     }
                //   );
                // }
                // let count = await NewAllCancer.find({ Count: '+' });
                // console.log(count.length);
                // await NewAllCancer.updateMany({ Count: '+' }, { Count: '0' });
                return [2 /*return*/, 'done'];
            });
        });
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], AllCancerResolver.prototype, "getallCancerProportionMatrix");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], AllCancerResolver.prototype, "getAllCancerTypes");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('maleDisease', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('femaleDisease', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], AllCancerResolver.prototype, "getAllCancerRaceData");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('dataSet', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('maleDisease', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('femaleDisease', { nullable: true }))
    ], AllCancerResolver.prototype, "getYearBasedAggregationForAllCancer");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGenderString_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('maleDisease', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('femaleDisease', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], AllCancerResolver.prototype, "getStateDataForAllCancer");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], AllCancerResolver.prototype, "tuttrus");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], AllCancerResolver.prototype, "changeLeukemia");
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], AllCancerResolver.prototype, "newDataImport");
    AllCancerResolver = __decorate([
        (0, type_graphql_1.Resolver)()
    ], AllCancerResolver);
    return AllCancerResolver;
}());
exports["default"] = AllCancerResolver;
