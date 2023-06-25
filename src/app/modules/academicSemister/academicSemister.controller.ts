import { Request, RequestHandler, Response } from 'express';
import {
  AcademicSemisterServices,
  getSemistersFromDB,
} from './academicSemister.services';

//Get Users
const getSemisters = async (req: Request, res: Response) => {
  const semister = await getSemistersFromDB();
  res.status(200).json({
    status: 200,
    data: semister,
  });
};

//Create Academic Semister
const createAcademicSemisterToDB: RequestHandler = async (req, res, next) => {
  try {
    const semister = req.body;
    const result = await AcademicSemisterServices.createSemister(semister);

    res.status(201).json({
      success: true,
      message: 'Semister created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemisterController = {
  createAcademicSemisterToDB,
  getSemisters,
};
