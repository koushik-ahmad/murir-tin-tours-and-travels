"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./routes/user.route");
const cors_1 = __importDefault(require("cors"));
const tour_route_1 = require("./routes/tour.route");
const review_route_1 = require("./routes/review.route");
const app = (0, express_1.default)();
// parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1/users', user_route_1.userRoutes);
app.use('/api/v1/tours', tour_route_1.tourRoutes);
app.use('/api/v1/reviews', review_route_1.reviewRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Murir Tim Tours & Travels',
    });
});
exports.default = app;
