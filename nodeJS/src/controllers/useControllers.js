import express, { response } from 'express';
import db from '../services/useServices.js';

const routes = express.Router();

routes.post('/',async(req,res)=>{
  const {name , email , password, typeUser} = req.body;

  await db.createUser(name, email, password, typeUser);

  response.status(200).send({message: 'salva com sucesso'});
});

export default routes;