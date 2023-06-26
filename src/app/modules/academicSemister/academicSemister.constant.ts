import {
  IAcademicSemisterCode,
  IAcademicSemisterMonth,
  IAcademicSemisterTitle,
} from './academicSemister.interface';

export const AcademicSemisterMonths: IAcademicSemisterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const AcademicSemisterTitle: IAcademicSemisterTitle[] = [
  'Autumn',
  'Summar',
  'Fall',
];
export const AcademicSemisterCode: IAcademicSemisterCode[] = ['01', '02', '03'];

export const academicSemisterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};
