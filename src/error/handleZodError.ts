import { IGenericErrorResponse } from '../interfaces/common';

const handleZodError = (error): IGenericErrorResponse => {
  const statusCode = 500;
  console.log(error);
  return {
    statusCode,
    message: 'ZodError',
    errorMessages: error,
  };
};

export default handleZodError;
