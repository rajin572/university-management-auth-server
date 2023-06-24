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

const AcademicSemisterSchema = new Schema<IAcademicSemister>({
  title: { type: String, required: true, enum: AcademicSemisterTitle },
  year: { type: Number, required: true },
  code: { type: String, required: true, enum: AcademicSemisterCode },
  startMonth: { type: String, required: true, enum: AcademicSemisterMonths },
  endMonth: { type: String, required: true, enum: AcademicSemisterMonths },
});

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  ' AcademicSemister',
  AcademicSemisterSchema
);
