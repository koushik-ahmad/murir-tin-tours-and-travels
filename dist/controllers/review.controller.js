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
exports.reviewController = void 0;
const review_service_1 = require("../services/review.service");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const createReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewDate = req.body;
        const result = yield review_service_1.reviewServices.createReview(reviewDate);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Review created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield review_service_1.reviewServices.getAllReviews();
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Review fetched successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield review_service_1.reviewServices.getSingleReview(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Single Review fetched successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewDate = req.body;
        const id = req.params.id;
        const result = yield review_service_1.reviewServices.updateReview(id, reviewDate);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Review updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield review_service_1.reviewServices.deleteReview(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Review deleted successfully',
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.reviewController = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
};
