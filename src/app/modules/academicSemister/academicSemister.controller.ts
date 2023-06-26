import { NextFunction, Request, Response } from 'express';
import {
  AcademicSemisterServices,
  getSemistersFromDB,
} from './academicSemister.services';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';

//Get Users
const getSemisters = async (req: Request, res: Response) => {
  const semister = await getSemistersFromDB();
  res.status(200).json({
    status: 200,
    data: semister,
  });
};

//Create Academic Semister
const createAcademicSemisterToDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const semister = req.body;
    const result = await AcademicSemisterServices.createSemister(semister);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Semister created successfully!',
      data: result,
    });
    next();
  }
);

export const AcademicSemisterController = {
  createAcademicSemisterToDB,
  getSemisters,
};
