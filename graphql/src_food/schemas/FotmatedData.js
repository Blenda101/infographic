"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var FormatedData = /** @class */ (function () {
    function FormatedData() {
    }
    __decorate([
        (0, type_graphql_1.Field)()
    ], FormatedData.prototype, "_id");
    __decorate([
        (0, type_graphql_1.Field)()
    ], FormatedData.prototype, "sampleSize");
    __decorate([
        (0, type_graphql_1.Field)()
    ], FormatedData.prototype, "value");
    __decorate([
        (0, type_graphql_1.Field)()
    ], FormatedData.prototype, "percentage");
    __decorate([
        (0, type_graphql_1.Field)({ nullable: true })
    ], FormatedData.prototype, "prevalence");
    FormatedData = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], FormatedData);
    return FormatedData;
}());
exports["default"] = FormatedData;
