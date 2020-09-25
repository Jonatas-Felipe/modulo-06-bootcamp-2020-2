import { Router } from 'express';

import appointmentsController from '../controllers/AppointmentsController';
import ensureAuthenticate from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticate);

appointmentsRouter.get('/', appointmentsController.List);
appointmentsRouter.post('/', appointmentsController.Create);

export default appointmentsRouter;
