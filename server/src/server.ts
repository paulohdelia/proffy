import express from 'express';
import router from './routes';

const server = express();

server.use(router);
server.use(express.json());

server.listen(3333, () => {
  console.log('server is running...');
});
