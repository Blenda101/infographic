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
var CancerIncident_1 = require("../../../models/CancerIncident");
var CancerDeath_1 = require("../../../models/CancerDeath");
var ProportionGender_1 = require("../schemas/ProportionGender");
var ProportionGenderString_1 = require("../schemas/ProportionGenderString");
var race = [
    'American Indian or Alaska Native',
    'Asian or Pacific Islander',
    'Black or African American',
    'Hispanic',
    'Other Races and Unknown combined',
    'White',
];
var maleDiseasesForCancer = [
    'Bladder',
    'Brain',
    'Colorectal',
    'Esophagus',
    'Gallbladder',
    'Kidney',
    'Leukemias',
    'Liver',
    'Lung',
    'Lymphoma',
    'Myeloma',
    'Oral',
    'Pancreas',
    'Prostate',
    'Skin',
    'Stomach',
    'Throat',
    'Thyroid',
];
var selectedMaleDisesasesForCancer = [
    'Bladder',
    'Brain',
    'Colorectal',
    'Esophagus',
    'Leukemias',
    'Liver',
    'Lung',
    'Lymphoma',
    'Pancreas',
    'Prostate', // include
];
var femaleDiseasesForCancer = [
    'Bladder',
    'Brain',
    'Breast',
    'Cervix',
    'Colorectal',
    'Corpus',
    'Esophagus',
    'Gallbladder',
    'Kidney',
    'Leukemias',
    'Liver',
    'Lung',
    'Lymphoma',
    'Myeloma',
    'Oral',
    'Ovary',
    'Pancreas',
    'Skin',
    'Stomach',
    'Thyroid',
];
var selectedFemaleDisesasesForCancer = [
    'Brain',
    'Breast',
    'Cervix',
    'Colorectal',
    'Leukemias',
    'Liver',
    'Lung',
    'Lymphoma',
    'Ovary',
    'Pancreas', // include
];
var maleDisease = [
    'Brain',
    'Breast',
    'Colorectal',
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
    'Pancreas',
    'Prostate',
    'Stomach',
    'Thyroid',
    'Urinary Bladder', //include
];
var selectedMaleDiseases = [
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
var femaleDisease = [
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
var selectedFemaleDiseases = [
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
var age = [
    '20-24',
    '30-39',
    '40-44',
    '40-49',
    '45-49',
    '50-54',
    '50-59',
    '55-59',
    '60-64',
    '60-69',
    '65-69',
    '70-74',
    '70-79',
    '75-79',
    '80+',
    '80-84',
    '85+',
];
var CancerResolver = /** @class */ (function () {
    function CancerResolver() {
    }
    CancerResolver.prototype.badhon = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CancerDeath_1["default"].updateMany({
                            Gender: 'Male',
                            Topic: {
                                $nin: selectedMaleDisesasesForCancer
                            }
                        }, {
                            diseaseLabelMale: 'Other'
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, CancerDeath_1["default"].updateMany({
                                Gender: 'Female',
                                Topic: {
                                    $nin: selectedFemaleDisesasesForCancer
                                }
                            }, {
                                diseaseLabelFemale: 'Other'
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    CancerResolver.prototype.changeSystemInfoAge = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CancerDeath_1["default"].updateMany({
                            ageGroup: '20-24'
                        }, {
                            ageLabel: '20-29'
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, CancerDeath_1["default"].updateMany({
                                ageGroup: {
                                    $in: ['40-44', '40-49', '45-49']
                                }
                            }, {
                                ageLabel: '40-49'
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, CancerDeath_1["default"].updateMany({
                                ageGroup: {
                                    $in: ['50-54', '50-59', '55-59']
                                }
                            }, {
                                ageLabel: '50-59'
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, CancerDeath_1["default"].updateMany({
                                ageGroup: {
                                    $in: ['60-64', '60-69', '65-69']
                                }
                            }, {
                                ageLabel: '60-69'
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, CancerDeath_1["default"].updateMany({
                                ageGroup: {
                                    $in: ['70-74', '70-79', '75-79']
                                }
                            }, {
                                ageLabel: '70-79'
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, CancerDeath_1["default"].updateMany({
                                ageGroup: {
                                    $in: ['80-84', '85+', '80+']
                                }
                            }, {
                                ageLabel: '80+'
                            })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, ['done']];
                }
            });
        });
    };
    CancerResolver.prototype.getProportionMatrix = function (year, state, race, age, dataSet) {
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
                        if (race) {
                            obj.Race = race;
                        }
                        if (age) {
                            obj.ageLabel = age;
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
    CancerResolver.prototype.getCancerTypes = function (year, state, race, age, dataSet) {
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
                        if (race) {
                            obj.Race = race;
                        }
                        if (age) {
                            obj.ageLabel = age;
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        console.log('Female', objFemale);
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
                    case 6:
                        console.log('maleData', femaleData);
                        return [2 /*return*/, {
                                maleData: maleData,
                                femaleData: femaleData
                            }];
                }
            });
        });
    };
    CancerResolver.prototype.getYearBasedAggregationForCancer = function (state, race, age, dataSet, maleDisease, femaleDisease) {
        return __awaiter(this, void 0, void 0, function () {
            var maleData, femaleData, obj, objMale, objFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        if (state) {
                            obj.Locationabbr = state;
                        }
                        if (race) {
                            obj.Race = race;
                        }
                        if (age) {
                            obj.Label = age;
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        if (maleDisease) {
                            objMale.diseaseLabelMale = maleDisease;
                        }
                        else {
                            objMale.diseaseLabelMale = 'Colorectal';
                        }
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (femaleDisease) {
                            objFemale.diseaseLabelFemale = femaleDisease;
                        }
                        else {
                            objFemale.diseaseLabelFemale = 'Breast';
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
    CancerResolver.prototype.getRaceData = function (year, state, maleDisease, femaleDisease, age, dataSet) {
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
                        if (age) {
                            obj.ageLabel = age;
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        if (maleDisease) {
                            objMale.diseaseLabelMale = maleDisease;
                        }
                        else {
                            objMale.diseaseLabelMale = 'Colorectal';
                        }
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (femaleDisease) {
                            objFemale.diseaseLabelFemale = femaleDisease;
                        }
                        else {
                            objFemale.diseaseLabelFemale = 'Breast';
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
    CancerResolver.prototype.getAgeData = function (year, state, maleDisease, femaleDisease, race, dataSet) {
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
                        if (race) {
                            obj.Race = race;
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        if (maleDisease) {
                            objMale.diseaseLabelMale = maleDisease;
                        }
                        else {
                            objMale.diseaseLabelMale = 'Colorectal';
                        }
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (femaleDisease) {
                            objFemale.diseaseLabelFemale = femaleDisease;
                        }
                        else {
                            objFemale.diseaseLabelFemale = 'Breast';
                        }
                        if (!(dataSet === 'Incidence')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAgeDataByGender(objMale, true, true)];
                    case 1:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getAgeDataByGender(objFemale, false, true)];
                    case 2:
                        femaleData = _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.getAgeDataByGender(objMale, true, false)];
                    case 4:
                        maleData = _a.sent();
                        return [4 /*yield*/, this.getAgeDataByGender(objFemale, false, false)];
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
    CancerResolver.prototype.getStateDataForCancer = function (year, race, maleDisease, femaleDisease, age, dataSet) {
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
                        if (age) {
                            obj.ageLabel = age;
                        }
                        objMale = __assign(__assign({}, obj), { Gender: 'Male' });
                        if (maleDisease) {
                            objMale.diseaseLabelMale = maleDisease;
                        }
                        else {
                            objMale.diseaseLabelMale = 'Colorectal';
                        }
                        objFemale = __assign(__assign({}, obj), { Gender: 'Female' });
                        if (maleDisease) {
                            objFemale.diseaseLabelFemale = femaleDisease;
                        }
                        else {
                            objFemale.diseaseLabelFemale = 'Breast';
                        }
                        console.log(objFemale);
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
    CancerResolver.prototype.getYearData = function (obj, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var model, data, total, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = CancerIncident_1["default"];
                        if (!isIncident) {
                            model = CancerDeath_1["default"];
                        }
                        console.log(model);
                        console.log(obj);
                        return [4 /*yield*/, model.aggregate([
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
                        if (data.length === 0) {
                            return [2 /*return*/, []];
                        }
                        total = data.reduce(function (acc, d) {
                            acc += d.totalCount;
                            return acc;
                        }, 0);
                        for (i = 0; i < data.length; i++) {
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    CancerResolver.prototype.getAgeDataByGender = function (obj, male, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var model, data, total, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = CancerIncident_1["default"];
                        if (!isIncident) {
                            model = CancerDeath_1["default"];
                        }
                        return [4 /*yield*/, model.aggregate([
                                {
                                    $match: obj
                                },
                                {
                                    $unwind: '$ageLabel'
                                },
                                {
                                    $group: {
                                        _id: '$ageLabel',
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
                                        _id: 1
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
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    CancerResolver.prototype.getStateDataByGender = function (obj, isMale, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var model, data, total, i, percentage, forMatedData, returnObj, sortedArray, length, t25, t50, t75, lowest, highest, i, returnData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = CancerIncident_1["default"];
                        if (!isIncident) {
                            model = CancerDeath_1["default"];
                        }
                        console.log(obj);
                        return [4 /*yield*/, model.aggregate([
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
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        if (data.length === 0 || data.length < 5) {
                            return [2 /*return*/, JSON.stringify({})];
                        }
                        forMatedData = data;
                        returnObj = {};
                        sortedArray = forMatedData.sort(function (data1, data2) { return data1.percentage - data2.percentage; });
                        length = sortedArray.length;
                        t25 = Math.floor((25 / 100) * (length + 1));
                        t50 = Math.floor((50 / 100) * (length + 1));
                        t75 = Math.floor((75 / 100) * (length + 1));
                        lowest = sortedArray[0];
                        highest = sortedArray[sortedArray.length - 1];
                        for (i = 1; i < sortedArray.length - 1; i++) {
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
    CancerResolver.prototype.getRaceDataByGender = function (obj, male, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var model, data, total, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = CancerIncident_1["default"];
                        if (!isIncident) {
                            model = CancerDeath_1["default"];
                            console.log(obj);
                        }
                        return [4 /*yield*/, model.aggregate([
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
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    CancerResolver.prototype.getProportionByGender = function (obj, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var model, unwindValue, maleData, maleTotal, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = CancerIncident_1["default"];
                        if (!isIncident) {
                            model = CancerDeath_1["default"];
                        }
                        unwindValue = '';
                        if (obj.Gender === 'Male') {
                            unwindValue = '$diseaseLabelMale';
                        }
                        else {
                            unwindValue = '$diseaseLabelFemale';
                        }
                        return [4 /*yield*/, model.aggregate([
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
                            percentage = (100 * maleData[i].totalCount) / maleTotal;
                            maleData[i].percentage = percentage;
                        }
                        return [2 /*return*/, maleData];
                }
            });
        });
    };
    CancerResolver.prototype.getCancerTypesByGender = function (obj, male, isIncident) {
        return __awaiter(this, void 0, void 0, function () {
            var model, unwindValue, data, total, maleDisease, femaleDisease, i, percentage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = CancerIncident_1["default"];
                        if (!isIncident) {
                            model = CancerDeath_1["default"];
                        }
                        unwindValue = '';
                        if (obj.Gender === 'Male') {
                            unwindValue = '$diseaseLabelMale';
                        }
                        else {
                            unwindValue = '$diseaseLabelFemale';
                        }
                        return [4 /*yield*/, model.aggregate([
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
                                'Bladder', //include
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
                                'Cervix', //include
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
                                'Prostate', // include
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
                                'Pancreas', // include
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
                            percentage = (100 * data[i].totalCount) / total;
                            data[i].percentage = percentage;
                        }
                        data = data.sort(function (a, b) { return a.percentage - b.percentage; });
                        console.log('----------------------------------------');
                        if (obj.Gender === 'Female') {
                            console.log(data);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], CancerResolver.prototype, "badhon");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [String]; })
    ], CancerResolver.prototype, "changeSystemInfoAge");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], CancerResolver.prototype, "getProportionMatrix");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], CancerResolver.prototype, "getCancerTypes");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('dataSet', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('maleDisease', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('femaleDisease', { nullable: true }))
    ], CancerResolver.prototype, "getYearBasedAggregationForCancer");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('maleDisease', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('femaleDisease', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], CancerResolver.prototype, "getRaceData");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGender_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('state', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('maleDisease', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('femaleDisease', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], CancerResolver.prototype, "getAgeData");
    __decorate([
        (0, type_graphql_1.Query)(function () { return ProportionGenderString_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
        __param(1, (0, type_graphql_1.Arg)('race', { nullable: true })),
        __param(2, (0, type_graphql_1.Arg)('maleDisease', { nullable: true })),
        __param(3, (0, type_graphql_1.Arg)('femaleDisease', { nullable: true })),
        __param(4, (0, type_graphql_1.Arg)('age', { nullable: true })),
        __param(5, (0, type_graphql_1.Arg)('dataSet', { nullable: true }))
    ], CancerResolver.prototype, "getStateDataForCancer");
    CancerResolver = __decorate([
        (0, type_graphql_1.Resolver)()
    ], CancerResolver);
    return CancerResolver;
}());
exports["default"] = CancerResolver;
