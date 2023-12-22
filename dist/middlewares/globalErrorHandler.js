"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    const status = err.status || 'error';
    res.status(statusCode).json({
        status,
        message,
    });
};
exports.default = globalErrorHandler;
