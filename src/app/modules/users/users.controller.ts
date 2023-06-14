import { Request, Response } from 'express'
import usersServices from './users.services'

const createUserToDB = async (req: Request, res: Response) => {
  try {
    const user = req.body

    const result = await usersServices.createUser(user)

    res.status(200).json({
      sucess: true,
      massage: 'User Created Successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      sucess: false,
      massage: 'Faild to create user',
    })
  }
}

export default {
  createUserToDB,
}
