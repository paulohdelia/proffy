import express from 'express';
const routes = express.Router();

import classes from './classes';

routes.use('/classes', classes);

export default routes;