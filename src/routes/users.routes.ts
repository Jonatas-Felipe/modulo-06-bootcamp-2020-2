import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import usersController from '../controllers/UsersController';
import ensureAuthenticate from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.Create);
usersRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  usersController.UpdateAvatar,
);

export default usersRouter;
