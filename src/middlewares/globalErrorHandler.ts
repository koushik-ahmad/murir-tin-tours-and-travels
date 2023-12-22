/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { TErrorResponse } from '../types/TErrorResponse'
import config from '../config'
import errorPreprocessor from '../helpers/errorHelpers/errorPreprocessor'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let errorResponse: TErrorResponse = {
    // Fallback error response
    statusCode: err.statusCode || 500,
    status: err.status || 'error',
    message: err.message || 'Something went wrong',
    issues: err.issues || [],
  }

  console.log(err)

  errorResponse = errorPreprocessor(err)

  // Sob error er Baap hocche JS Error Class

  res.status(errorResponse.statusCode).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
    // only in NODE_ENV=development
    stack: config.node_env === 'development' ? err.stack : undefined,
    error: err,
  })
}

export default globalErrorHandler
