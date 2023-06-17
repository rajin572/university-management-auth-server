import { NextFunction, Request, Response } from 'express'
import usersServices from './users.services'

const createUserToDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body
    const result = await usersServices.createUser(user)

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export default {
  createUserToDB,
}
