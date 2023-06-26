// import { NextFunction, Request, RequestHandler, Response } from 'express';

// const catchAsync = (fun: RequestHandler) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       fun(req, res, next);
//     } catch (err) {
//       next(err);
//     }
//   };
// };

// export default catchAsync;

import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default catchAsync;
