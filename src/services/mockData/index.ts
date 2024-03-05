import {Model, createServer} from 'miragejs';
import UserRoute from './user';
const startServer = createServer({
  models: {
    user: Model.extend({name: 'string'}),
  },
  seeds(server) {
    server.create('user', {
      id: '1',
      username: 'Test',
      password: '123',
    });
  },
  routes() {
    this.namespace = 'api';
    this.urlPrefix = 'http://localhost:3002';
    UserRoute(this);
  },
});

const db = startServer.db;

export default startServer;

export {db};
