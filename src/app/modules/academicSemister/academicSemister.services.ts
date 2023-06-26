import ApiError from '../../../error/ApiError';
import { academicSemisterTitleCodeMapper } from './academicSemister.constant';
import { IAcademicSemister } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';
import status from 'http-status';

//----------------------- Function to Get Semisters -------------------------------
export const getSemistersFromDB = async (): Promise<IAcademicSemister[]> => {
  const Semisters = await AcademicSemister.find();
  return Semisters;
};

// ---------------------- Function to create a Semister ----------------------------
const createSemister = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  if (academicSemisterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid Semister Code');
  }
  const result = await AcademicSemister.create(payload);
  return result;
};

export const AcademicSemisterServices = {
  createSemister,
  getSemistersFromDB,
};
