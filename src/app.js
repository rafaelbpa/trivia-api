import express from 'express';
import routes from './routes';
import cors from 'cors';

import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://rafaelbpa:64CXvW750iwUDLqO@cluster0-mfnb0.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;