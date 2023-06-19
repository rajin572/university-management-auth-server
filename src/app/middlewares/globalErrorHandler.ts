import { ErrorRequestHandler } from 'express';
import config from '../../config';
import { IGenericErrorMessage } from '../../interfaces/error';
import handleValidationError from '../../error/handleValidationError';
import ApiError from '../../error/ApiError';
import { errorLogger } from '../../shared/logger';
import { ZodError } from 'zod';
import handleZodError from '../../error/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log(`🐱‍🏍 globalErrorHandler ~~`, { error })
    : errorLogger.error(`🐱‍🏍 globalErrorHandler ~~`, error);

  let statusCode = 500;
  let message = 'Something Went Wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error.name === 'ValidationError') {
    const simplyfiedError = handleValidationError(error);
    statusCode = simplyfiedError.statusCode;
    message = simplyfiedError.message;
    errorMessages = simplyfiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplyfiedError = handleZodError(error);
    statusCode = simplyfiedError.statusCode;
    message = simplyfiedError.message;
    errorMessages = simplyfiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: 'ApiError',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    errorMessages = error?.message
      ? [
          {
            path: 'Error',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
  next();
};

export default globalErrorHandler;
