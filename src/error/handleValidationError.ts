import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'
import { IGenericErrorResponse } from '../interfaces/common'

const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (element: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: element.path,
        message: element.message,
      }
    }
  )

  const statusCode = 500

  return {
    statusCode,
    message: 'ValidationError',
    errorMessages: errors,
  }
}

export default handleValidationError
