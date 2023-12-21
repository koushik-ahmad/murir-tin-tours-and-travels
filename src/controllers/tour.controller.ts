/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { tourServices } from '../services/tour.service'
import sendSuccessResponse from '../utils/sendResponse'
import catchAsyncFunction from '../utils/catchAsync'

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

const createTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const tourDate = req.body
  const result = await tourServices.createTour(tourDate)

  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'Tour created successfully',
    data: result,
  })
})

// app  vitore next call -> router -> controller -> response -> but error hoise -> next(error) ->

const getAllTours = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await tourServices.getAllTours()

  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Tour fetched successfully',
    data: result,
  })
})

const getSingleTour = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await tourServices.getSingleTour(id)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single Tour fetched successfully',
      data: result,
    })
  },
)

const updateTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const tourDate = req.body
  const id = req.params.id
  const result = await tourServices.updateTour(id, tourDate)

  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Tour Updated successfully',
    data: result,
  })
})

const deleteTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const id = req.params.id
  await tourServices.deleteTour(id)

  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Tour Deleted successfully',
    data: null,
  })
})

const getNextSchedule = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await tourServices.getNextSchedule(id)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Next schedule fetched successfully',
      data: result,
    })
  },
)

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
