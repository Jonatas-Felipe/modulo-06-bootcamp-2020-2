import { Router } from 'express';

import sessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/', sessionsController.Create);

export default sessionsRouter;
