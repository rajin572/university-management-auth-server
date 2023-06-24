import { z } from 'zod';
import {
  AcademicSemisterCode,
  AcademicSemisterMonths,
  AcademicSemisterTitle,
} from './academicSemister.constant';

const createAcademicSemisterZodSchema = z.object({
  body: z.object({
    title: z.enum([...AcademicSemisterTitle] as [string, ...string[]], {
      required_error: 'Title is require',
    }),
    year: z.number({
      required_error: 'Year is require',
    }),
    code: z.enum([...AcademicSemisterCode] as [string, ...string[]], {
      required_error: 'Code is require',
    }),
    startMonth: z.enum([...AcademicSemisterMonths] as [string, ...string[]], {
      required_error: 'Start Month is require',
    }),
    endMonth: z.enum([...AcademicSemisterMonths] as [string, ...string[]], {
      required_error: 'End Month is require',
    }),
  }),
});

export const AcademicSemisterValidate = {
  createAcademicSemisterZodSchema,
};
