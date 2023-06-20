import { Schema, model } from 'mongoose';
import {
  AcademicSemisterModel,
  IAcademicSemister,
} from './academicSemister.interface';

const AcademicSemisterSchema = new Schema<IAcademicSemister>({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  code: { type: String, required: true },
  startMonth: { type: String, required: true },
  endMonth: { type: String, required: true },
});

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  ' AcademicSemister',
  AcademicSemisterSchema
);
