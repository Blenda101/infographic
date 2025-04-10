"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var FotmatedData_1 = require("./FotmatedData");
var ReturnInfoData = /** @class */ (function () {
    function ReturnInfoData() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return [FotmatedData_1["default"]]; })
    ], ReturnInfoData.prototype, "diseases");
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return [FotmatedData_1["default"]]; })
    ], ReturnInfoData.prototype, "race");
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return [FotmatedData_1["default"]]; })
    ], ReturnInfoData.prototype, "sex");
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return [FotmatedData_1["default"]]; })
    ], ReturnInfoData.prototype, "age");
    ReturnInfoData = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], ReturnInfoData);
    return ReturnInfoData;
}());
exports["default"] = ReturnInfoData;
