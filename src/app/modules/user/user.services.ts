import config from '../../../config';
import ApiError from '../../../error/ApiError';
import { genarateUserID } from './user.utilties';
import { IUser } from './user.interface';
import { User } from './user.model';

//----------------------- Function to Get Users -------------------------------
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

// ---------------------- Function to create a user ----------------------------
const createUser = async (user: IUser): Promise<IUser | null> => {
  //Auto genarated ID
  const id = await genarateUserID();
  user.id = id;

  //Check password if user dosen't defind password then set the default password
  if (!user.password) {
    user.password = config.default_user_password as string;
  }

  //Create User
  const userData = await User.create(user);

  //if the userData give us a error then it will throw a error
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user');
  }
  return userData;
};

// ---------------------- Exports ----------------------------
export const UserServices = {
  createUser,
  getUsersFromDB,
};
