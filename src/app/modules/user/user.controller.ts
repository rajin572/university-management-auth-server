import { Request, RequestHandler, Response } from 'express';
import { UserServices, getUsersFromDB } from './user.services';

//Get Users
const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: 200,
    data: users,
  });
};

//Create User
const createUserToDB: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await UserServices.createUser(user);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createUserToDB,
  getUsers,
};
