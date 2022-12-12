//const express = require('express')
import express from 'express'
const routes = express.Router()
//const {validateCreate} = require('../Validators/usuarioV')
//import  validateToken from '../Helpers/jwtHelper.js'
import { validateToken } from '../Helpers/jwtHelper.js';

import {methods as usuario} from "../Controllers/usuario.js";


routes.post("/",  usuario.addUsuario);
routes.get("/", validateToken, usuario.getUsuario);
routes.get("/:idUsuario", validateToken, usuario.getUsuarioID);
routes.delete("/idUsuario", validateToken, usuario.deleteUsuario);
routes.patch("/:idUsuario", validateToken, usuario.updateUsuario);

routes.patch("/password/:idUsuario",  usuario.updateUsuarioPassword);

export default routes;
//module.exports = routes