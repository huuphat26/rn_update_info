/* eslint-disable no-sequences */
import {Server} from 'miragejs';
const UserRoute = (server: Server) => {
  server.post('/login', (schema, request) => {
    try {
      const {username, password} = JSON.parse(request.requestBody);
      const user = schema.users?.findBy({username, password});
      if (user) {
        return {token: 'fakeToken', server: user.models};
      } else {
        return {error: 'Invalid credentials'};
      }
    } catch (err) {
      return err;
    }
  });

  server.get('/user/:id', (schema, request) => {
    try {
      const userId = request.params.id;
      const user = schema.users.find(userId);

      if (user) {
        return user.attrs;
      } else {
        return {error: 'User not found'};
      }
    } catch (err) {
      return err;
    }
  });

  server.put('/user/:id', (schema, request) => {
    try {
      const userId = request.params.id;
      const user = schema.users.find(userId);
      if (!user) {
        return {error: 'User not found'};
      }
      return user.attrs;
    } catch (err) {
      return err;
    }
  });
};

export default UserRoute;
