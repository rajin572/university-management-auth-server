import express from 'express';
import { UserRouter } from '../modules/user/user.route';
import { AcademicSemisterRouter } from '../modules/academicSemister/academicSemister.router';

const routers = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/academic-semister',
    route: AcademicSemisterRouter,
  },
];

moduleRoutes.forEach(moduleRoute =>
  routers.use(moduleRoute.path, moduleRoute.route)
);

export default routers;
