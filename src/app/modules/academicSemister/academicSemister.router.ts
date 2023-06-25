import express from 'express';

import ValidateRequest from '../../middlewares/validateRequest';
import { AcademicSemisterValidate } from './academicSemister.validate';
import { AcademicSemisterController } from './academicSemister.controller';

const router = express.Router();

//Get All Semester
router.get('/', AcademicSemisterController.getSemisters);

//Create Academic Semmester
router.post(
  '/create-semister',
  ValidateRequest(AcademicSemisterValidate.createAcademicSemisterZodSchema),
  AcademicSemisterController.createAcademicSemisterToDB
);

export const AcademicSemisterRouter = router;
