"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var myClass = /** @class */ (function () {
    function myClass() {
    }
    __decorate([
        (0, type_graphql_1.Field)()
    ], myClass.prototype, "day");
    __decorate([
        (0, type_graphql_1.Field)()
    ], myClass.prototype, "code");
    __decorate([
        (0, type_graphql_1.Field)()
    ], myClass.prototype, "myCode");
    __decorate([
        (0, type_graphql_1.Field)()
    ], myClass.prototype, "time");
    __decorate([
        (0, type_graphql_1.Field)()
    ], myClass.prototype, "room");
    __decorate([
        (0, type_graphql_1.Field)()
    ], myClass.prototype, "name");
    __decorate([
        (0, type_graphql_1.Field)()
    ], myClass.prototype, "TI");
    __decorate([
        (0, type_graphql_1.Field)()
    ], myClass.prototype, "sec");
    __decorate([
        (0, type_graphql_1.Field)({ nullable: true })
    ], myClass.prototype, "subSec");
    __decorate([
        (0, type_graphql_1.Field)({ nullable: true })
    ], myClass.prototype, "lab");
    myClass = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], myClass);
    return myClass;
}());
exports["default"] = myClass;
