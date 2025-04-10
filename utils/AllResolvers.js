"use strict";
exports.__esModule = true;
var FoodResolver_1 = require("../graphql/src_food/resolvers/FoodResolver");
var InfoDeathResolver_1 = require("../graphql/src_food/resolvers/InfoDeathResolver");
var CancerResolver_1 = require("../graphql/src_food/resolvers/CancerResolver");
var NewAllCancerResolver_1 = require("../graphql/src_food/resolvers/NewAllCancerResolver");
function getAllResolvers() {
    return [FoodResolver_1["default"], InfoDeathResolver_1["default"], CancerResolver_1["default"], NewAllCancerResolver_1["default"]];
}
exports["default"] = getAllResolvers;
