"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDate = req.body;
        const result = yield user_service_1.userServices.createUser(userDate);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'User created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userServices.getAllUsers();
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'User fetched successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_service_1.userServices.getSingleUser(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Single User fetched successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDate = req.body;
        const id = req.params.id;
        const result = yield user_service_1.userServices.updateUser(id, userDate);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'User updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield user_service_1.userServices.deleteUser(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'User deleted successfully',
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
