import { Express } from "express";

import user from './controllers/useControllers.js';

const route  = Express();

route.use('/user',user);

export default route;