"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// jei data ashbe shei datar type
const sendSuccessResponse = (res, data) => {
    res.status(data.statusCode).json({
        status: 'success',
        message: data.message,
        data: data.data,
    });
};
exports.default = sendSuccessResponse;
