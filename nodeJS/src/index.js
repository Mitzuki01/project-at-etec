import express from'express';
import routes from './routes.js'


const api = express();

api.use(express.json());

api.use('/'.routes);

api.listen(3000,()=>{
  console.log('on')
})