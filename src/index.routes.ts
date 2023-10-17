import { Router } from 'express';

import { userRoutes } from './routes/users/users.routes';

const routes = Router();

routes.use(userRoutes);

export {routes};