import { registerUser, loginUser, profileUser, logoutUser } from '../controllers/userController.mjs';
import { Router } from 'express';

const routerUser = Router();

routerUser.post('/register', registerUser);
routerUser.post('/login', loginUser);
routerUser.get('/profile', profileUser)
routerUser.post('/logout', logoutUser);

export default routerUser;
