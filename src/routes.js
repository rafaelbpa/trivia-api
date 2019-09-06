import { Router } from 'express';

import TriviaController from './app/controllers/TriviaController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

routes.get('/trivia', TriviaController.index);
routes.post('/trivia', TriviaController.store);

export default routes;