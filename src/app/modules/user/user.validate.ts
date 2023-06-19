import { z } from 'zod';

const createZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is require',
    }),
  }),
});

export const UserValidate = {
  createZodSchema,
};
