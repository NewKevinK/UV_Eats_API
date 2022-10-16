const express = require('express')
const routes = express.Router()
//const {validateCreate} = require('../Validators/usuarioV')
import {methods as auth} from "../Controllers/auth";

routes.post("/", auth.loginAuth);
//routes.get("/",usuario.getUsuario);

module.exports = routes