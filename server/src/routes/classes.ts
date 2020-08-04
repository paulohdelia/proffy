import express from 'express';
const routes = express.Router();

import ClassesController from '../controllers/ClassesController';
const { post } = ClassesController;

routes.post('/', post);

export default routes;