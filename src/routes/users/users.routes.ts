import { Router } from "express";

import { getUsers } from "../../controllers/usersController/getUsers.controller";
import { registerUser } from "../../controllers/usersController/registerUser.controller";

const userRoutes = Router();

userRoutes.get('/getUsers', getUsers);
userRoutes.post('/registerUser', registerUser);

export {userRoutes};