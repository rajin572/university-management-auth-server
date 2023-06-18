import { RequestHandler } from 'express'
import { UserServices } from './user.services'
import { z } from 'zod'

const createUserToDB: RequestHandler = async (req, res, next) => {
  try {
    // req-validation

    const createZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is require',
        }),
      }),
    })

    await createZodSchema.parseAsync(req)

    const user = req.body
    const result = await UserServices.createUser(user)

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUserToDB,
}
