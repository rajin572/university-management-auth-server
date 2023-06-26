import { NextFunction, Request, Response } from 'express';
import { UserServices, getUsersFromDB } from './user.services';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';

//Get Users
const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: 200,
    data: users,
  });
};

//Create User
const createUserToDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    const result = await UserServices.createUser(user);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
    next();
  }
);

export const UserController = {
  createUserToDB,
  getUsers,
};
