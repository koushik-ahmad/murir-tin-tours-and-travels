/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { TErrorResponse } from '../../types/TErrorResponse'
import handleValidationError from './handlerValidationError'
import handleDuplicateError from './handleDuplicateError'
import handleCastError from './handleCastError'
import GenericError from '../../classes/errorClasses/GenericError'
import handleGenericError from './handleGenericError'
import { ZodError } from 'zod'
import handlerZodError from './handleZodError'

const errorPreprocessor = (err: any): TErrorResponse => {
  if (err instanceof ZodError) {
    return handlerZodError(err)
  } else if (err instanceof mongoose.Error.ValidationError) {
    return handleValidationError(err)
  } else if (err.code && err.code === 11000) {
    return handleDuplicateError(err)
  } else if (err instanceof mongoose.Error.CastError) {
    return handleCastError(err)
  } else if (err instanceof GenericError) {
    return handleGenericError(err)
  } else {
    return {
      statusCode: 500,
      status: 'error',
      message: 'Unknown Error',
      issues: [
        {
          path: '',
          message: err.message,
        },
      ],
    }
  }
}

export default errorPreprocessor
