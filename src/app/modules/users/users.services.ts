import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'

// ---------------------- Function to create a user ----------------------------
const createUser = async (user: IUser): Promise<IUser | null> => {
  //Auto genarated ID

  //Check password if user dosen't defind password then set the default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  //Create User
  const userData = await User.create(user)

  //if the userData give us a error then it will throw a error
  if (!userData) {
    throw new Error('Failed to create user')
  }
  return userData
}

// ---------------------- Exports ----------------------------
export default {
  createUser,
}
