import { User } from './user.model';

// ----------------------Create Genarate ID --------------------------

//Find The Last User From DB
const findLastUserID = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id;
};

//Create Increment Genarate ID
export const genarateUserID = async () => {
  const currentID = (await findLastUserID()) || (0).toString().padStart(5, '0');

  const incrementID = (parseFloat(currentID) + 1).toString().padStart(5, '0');

  return incrementID;
};
