"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1', routes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Murir Tin Tours & Travels',
    });
});
//catch all route - Trying to catch a Not Found Route
//Controller Approach
// way-1
// app.all('*', (req: Request, res: Response) => {
//   console.log(req.originalUrl);
//   res.status(404).json({
//     status: 'fail',
//     message: `Route Not Found for ${req.originalUrl}`,
//   })
// })
// Way-2
// app.get('*', notFound)
// app.post('*', notFound)
//Middleware Approach
// app.use("*", notFound)
// app.all('*', notFound)
app.use(notFound_1.default);
//Global Error Handler - Mini Version
app.use(globalErrorHandler_1.default);
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   const statusCode = err.statusCode || 500
//   const message = err.message || 'Something went wrong'
//   const status = err.status || 'error'
//   res.status(statusCode).json({
//     status,
//     message,
//   })
// })
exports.default = app;
