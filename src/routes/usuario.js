const express = require('express')
const routes = express.Router()
const {validateCreate} = require('../Validators/usuarioV')
const { validateToken } = require('../Helpers/jwtHelper');

import {methods as usuario} from "../Controllers/usuario";
//import { validateToken } from "../Helpers/jwtHelper";

routes.post("/", validateCreate, usuario.addUsuario);
routes.get("/", validateToken, usuario.getUsuario);

module.exports = routes