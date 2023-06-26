import express, { Application, Request, Response } from 'express';
// import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routes/routes';
// import ApiError from './error/ApiError'
const app: Application = express();

//cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Router
app.use('/api/v1', routers);

// Default Route
app.get('/', (req: Request, res: Response) => {
  res.send('University Management Application Auth system');
});

//global error handeler

app.use(globalErrorHandler);

export default app;
