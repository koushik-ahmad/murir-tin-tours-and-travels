/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { reviewServices } from '../services/review.service'
import sendSuccessResponse from '../utils/sendResponse'

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviewDate = req.body
    const result = await reviewServices.createReview(reviewDate)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Review created successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const getAllReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await reviewServices.getAllReviews()

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Review fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const getSingleReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await reviewServices.getSingleReview(id)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Single Review fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviewDate = req.body
    const id = req.params.id
    const result = await reviewServices.updateReview(id, reviewDate)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Review updated successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    await reviewServices.deleteReview(id)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Review deleted successfully',
      data: null,
    })
  } catch (error: any) {
    next(error)
  }
}

export const reviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
