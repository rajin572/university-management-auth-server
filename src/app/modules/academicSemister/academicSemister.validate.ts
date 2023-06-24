import { z } from 'zod';

const createAcademicSemisterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summar', 'fall'], {
      required_error: 'Title is require',
    }),
    year: z.number({
      required_error: 'Year is require',
    }),
    code: z.enum(['01', '02', '03'], {
      required_error: 'Code is require',
    }),
    startMonth: z.enum(
      [
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
      ],
      {
        required_error: 'Start Month is require',
      }
    ),
    endMonth: z.enum(
      [
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
      ],
      {
        required_error: 'End Month is require',
      }
    ),
  }),
});

export const AcademicSemisterValidate = {
  createAcademicSemisterZodSchema,
};
