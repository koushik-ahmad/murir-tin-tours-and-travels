"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booking_route_1 = require("../routes/booking.route");
const review_route_1 = require("../routes/review.route");
const tour_route_1 = require("../routes/tour.route");
const user_route_1 = require("../routes/user.route");
const routes = [
    {
        path: '/users',
        route: user_route_1.userRoutes,
    },
    {
        path: '/tours',
        route: tour_route_1.tourRoutes,
    },
    {
        path: '/reviews',
        route: review_route_1.reviewRoutes,
    },
    {
        path: '/bookings',
        route: booking_route_1.bookingRoutes,
    },
];
exports.default = routes;
