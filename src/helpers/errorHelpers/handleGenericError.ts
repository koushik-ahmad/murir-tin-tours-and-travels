import GenericError from '../../classes/errorClasses/GenericError'
import { TErrorIssue, TErrorResponse } from '../../types/TErrorResponse'

const handleGenericError = (err: GenericError): TErrorResponse => {
  const issues: TErrorIssue[] = [
    {
      path: '',
      message: err.message,
    },
  ]

  return {
    statusCode: err.statusCode,
    status: 'error',
    message: 'Generic Error',
    issues,
  }
}

export default handleGenericError
