import express from 'express';

import ValidateRequest from '../../middlewares/validateRequest';
import { AcademicSemisterValidate } from './academicSemister.validate';

const router = express.Router();

router.post(
  '/create-academic-semister',
  ValidateRequest(AcademicSemisterValidate.createAcademicSemisterZodSchema)
);

export const AcademicSemisterRouter = router;
