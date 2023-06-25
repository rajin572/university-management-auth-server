import express from 'express';
import { UserController } from './user.controller';
import { UserValidate } from './user.validate';
import ValidateRequest from '../../middlewares/validateRequest';

const router = express.Router();

//Get All Users
router.get('/', UserController.getUsers);

//Create Users
router.post(
  '/create-user',
  ValidateRequest(UserValidate.createUserZodSchema),
  UserController.createUserToDB
);

export const UserRouter = router;
