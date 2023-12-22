"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Tour',
    },
    bookedSlots: {
        type: Number,
        required: [true, 'A booking must have bookedSlots'],
    },
    bookingStatus: {
        type: String,
        enum: ['pending', 'paid', 'cancelled'],
        required: [true, 'A booking must have a bookingStatus'],
    },
    price: {
        type: Number,
        required: [true, 'A booking must have a price'],
    },
});
const Booking = (0, mongoose_1.model)('Booking', bookingSchema);
exports.default = Booking;
