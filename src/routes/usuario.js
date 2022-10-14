const express = require('express')
const routes = express.Router()
const {validateCreate} = require('../Validators/usuarioV')
import {methods as usuario} from "../Controllers/usuario";

routes.post("/", validateCreate, usuario.addUsuario);
routes.get("/",usuario.getUsuario);

module.exports = routes