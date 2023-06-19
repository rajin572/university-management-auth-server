import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map(
    (element: ZodIssue) => {
      return {
        path: element?.path.length - 1,
        message: element?.message,
      };
    }
  );

  const statusCode = 500;
  return {
    statusCode,
    message: 'ZodError',
    errorMessages: errors,
  };
};

export default handleZodError;
