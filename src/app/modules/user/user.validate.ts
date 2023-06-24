import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is require',
    }),
  }),
});

export const UserValidate = {
  createUserZodSchema,
};
