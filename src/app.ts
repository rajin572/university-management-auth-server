import express, { Application, NextFunction, Request, Response } from 'express';
// import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routes/routes';
import httpStatus from 'http-status';
// import ApiError from './error/ApiError'
const app: Application = express();

//cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default Route
app.get('/', (req: Request, res: Response) => {
  res.send('University Management Application Auth system');
});

//Application Router
app.use('/api/v1', routers);

//global error handeler
app.use(globalErrorHandler);

//Not Found Error Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  });
  next();
});

export default app;
