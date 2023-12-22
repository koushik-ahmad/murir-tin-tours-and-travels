"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_constants_1 = __importDefault(require("../constants/routes.constants."));
const globalRoute = express_1.default.Router();
routes_constants_1.default.forEach((routeObject) => {
    globalRoute.use(routeObject.path, routeObject.route);
});
exports.default = globalRoute;
