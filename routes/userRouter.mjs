import { registerUser, loginUser } from '../controllers/userController.mjs';
import { Router } from 'express';

const routerUser = Router();

routerUser.post('/register', registerUser);
routerUser.post('/login', loginUser);

export default routerUser;
