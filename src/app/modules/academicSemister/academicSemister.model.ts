import { Schema, model } from 'mongoose';
import {
  AcademicSemisterModel,
  IAcademicSemister,
} from './academicSemister.interface';
import {
  AcademicSemisterCode,
  AcademicSemisterMonths,
  AcademicSemisterTitle,
} from './academicSemister.constant';
import ApiError from '../../../error/ApiError';

import status from 'http-status';

const AcademicSemisterSchema = new Schema<IAcademicSemister>(
  {
    title: { type: String, required: true, enum: AcademicSemisterTitle },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: AcademicSemisterCode },
    startMonth: { type: String, required: true, enum: AcademicSemisterMonths },
    endMonth: { type: String, required: true, enum: AcademicSemisterMonths },
  },
  {
    timestamps: true,
  }
);

//Handle Academic Semister is exist or not
AcademicSemisterSchema.pre('save', async function (next) {
  const isExits = await AcademicSemister.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExits) {
    throw new ApiError(status.CONFLICT, 'Academic Semister Alreday Exist !');
  }
  next();
});

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  'AcademicSemister',
  AcademicSemisterSchema
);
