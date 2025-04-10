"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var ProportionData = /** @class */ (function () {
    function ProportionData() {
    }
    __decorate([
        (0, type_graphql_1.Field)()
    ], ProportionData.prototype, "_id");
    __decorate([
        (0, type_graphql_1.Field)()
    ], ProportionData.prototype, "totalPopulation");
    __decorate([
        (0, type_graphql_1.Field)()
    ], ProportionData.prototype, "totalCount");
    __decorate([
        (0, type_graphql_1.Field)()
    ], ProportionData.prototype, "totalCrudeRate");
    __decorate([
        (0, type_graphql_1.Field)()
    ], ProportionData.prototype, "weightedAverage");
    __decorate([
        (0, type_graphql_1.Field)()
    ], ProportionData.prototype, "percentage");
    ProportionData = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], ProportionData);
    return ProportionData;
}());
exports["default"] = ProportionData;
