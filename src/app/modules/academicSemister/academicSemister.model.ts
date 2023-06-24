import { Schema, model } from 'mongoose';
import {
  AcademicSemisterModel,
  IAcademicSemister,
} from './academicSemister.interface';

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AcademicSemisterSchema = new Schema<IAcademicSemister>({
  title: { type: String, required: true, enum: ['Autumn', 'Summar', 'fall'] },
  year: { type: Number, required: true },
  code: { type: String, required: true, enum: ['01', '02', '03'] },
  startMonth: { type: String, required: true, enum: months },
  endMonth: { type: String, required: true, enum: months },
});

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  ' AcademicSemister',
  AcademicSemisterSchema
);
