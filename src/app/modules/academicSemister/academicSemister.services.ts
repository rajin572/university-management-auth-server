import { IAcademicSemister } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';

//----------------------- Function to Get Semisters -------------------------------
export const getSemistersFromDB = async (): Promise<IAcademicSemister[]> => {
  const Semisters = await AcademicSemister.find();
  return Semisters;
};

// ---------------------- Function to create a Semister ----------------------------
const createSemister = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  const result = await AcademicSemister.create(payload);
  return result;
};

export const AcademicSemisterServices = {
  createSemister,
  getSemistersFromDB,
};
