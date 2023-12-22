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
exports.bookingController = void 0;
const booking_service_1 = require("../services/booking.service");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const createBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingDate = req.body;
    const result = yield booking_service_1.bookingServices.createBooking(bookingDate);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: 'Booking created successfully',
        data: result,
    });
}));
const getAllBookings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.bookingServices.getAllBookings();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Booking fetched successfully',
        data: result,
    });
}));
const getSingleBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield booking_service_1.bookingServices.getSingleBooking(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Single Booking fetched successfully',
        data: result,
    });
}));
const getAllBookingsOfAUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const result = yield booking_service_1.bookingServices.getAllBookingsOfAUser(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'All Bookings of a user fetched successfully',
        data: result,
    });
}));
const updateBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingDate = req.body;
    const id = req.params.id;
    const result = yield booking_service_1.bookingServices.updateBooking(id, bookingDate);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Booking Updated successfully',
        data: result,
    });
}));
const deleteBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield booking_service_1.bookingServices.deleteBooking(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Booking Deleted successfully',
        data: null,
    });
}));
exports.bookingController = {
    createBooking,
    getAllBookings,
    getSingleBooking,
    getAllBookingsOfAUser,
    updateBooking,
    deleteBooking,
};
