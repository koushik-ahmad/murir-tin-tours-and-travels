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
exports.tourController = void 0;
const tour_service_1 = require("../services/tour.service");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
// const fn = async () => {
//   const anotherFn = async () => {}
//   return anotherFn
// }
//HOF - Higher Order Function
// recieves a function as an argument/ parameter and / or returns a function
// const catchAsyncFunction = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((error: any) => next(error))
//   }
// }
// X calls Y -> Y call Z
// catchAsync --> call korle ekta function ashbe -> shei function ke router call korbe
// sathe req, res, next diye dibe -> jei function ta router call korsilo shei function
// amader nijosho function call kore dibe with req, res next
const createTour = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tourDate = req.body;
    const result = yield tour_service_1.tourServices.createTour(tourDate);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: 'Tour created successfully',
        data: result,
    });
}));
// app  vitore next call -> router -> controller -> response -> but error hoise -> next(error) ->
const getAllTours = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_service_1.tourServices.getAllTours();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Tour fetched successfully',
        data: result,
    });
}));
const getSingleTour = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield tour_service_1.tourServices.getSingleTour(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Single Tour fetched successfully',
        data: result,
    });
}));
const updateTour = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tourDate = req.body;
    const id = req.params.id;
    const result = yield tour_service_1.tourServices.updateTour(id, tourDate);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Tour Updated successfully',
        data: result,
    });
}));
const deleteTour = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield tour_service_1.tourServices.deleteTour(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Tour Deleted successfully',
        data: null,
    });
}));
const getNextSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield tour_service_1.tourServices.getNextSchedule(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Next schedule fetched successfully',
        data: result,
    });
}));
exports.tourController = {
    createTour,
    getAllTours,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule,
};
