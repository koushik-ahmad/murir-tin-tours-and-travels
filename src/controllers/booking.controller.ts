/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { bookingServices } from '../services/booking.service'
import sendSuccessResponse from '../utils/sendResponse'
import catchAsyncFunction from '../utils/catchAsync'

const createBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const bookingDate = req.body
    const result = await bookingServices.createBooking(bookingDate)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Booking created successfully',
      data: result,
    })
  },
)

const getAllBookings = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await bookingServices.getAllBookings()

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking fetched successfully',
      data: result,
    })
  },
)

const getSingleBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await bookingServices.getSingleBooking(id)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single Booking fetched successfully',
      data: result,
    })
  },
)

const getAllBookingsOfAUser = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const userId = req.params.userId
    const result = await bookingServices.getAllBookingsOfAUser(userId)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'All Bookings of a user fetched successfully',
      data: result,
    })
  },
)

const updateBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const bookingDate = req.body
    const id = req.params.id
    const result = await bookingServices.updateBooking(id, bookingDate)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking Updated successfully',
      data: result,
    })
  },
)

const deleteBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await bookingServices.deleteBooking(id)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking Deleted successfully',
      data: null,
    })
  },
)

export const bookingController = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  getAllBookingsOfAUser,
  updateBooking,
  deleteBooking,
}
