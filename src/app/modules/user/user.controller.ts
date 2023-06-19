import { RequestHandler } from 'express'
import { UserServices } from './user.services'

const createUserToDB: RequestHandler = async (req, res, next) => {
  try {
    // req-validation

    // await createZodSchema.parseAsync(req)

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
