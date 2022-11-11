const express = require('express')
const routes = express.Router()
const {validateCreate} = require('../Validators/usuarioV')
const { validateToken } = require('../Helpers/jwtHelper');

import {methods as usuario} from "../Controllers/usuario";


routes.post("/", validateCreate, usuario.addUsuario);
routes.get("/", validateToken, usuario.getUsuario);
routes.get("/:idUsuario", validateToken, usuario.getUsuarioID);
routes.delete("/idUsuario", validateToken, usuario.deleteUsuario);
routes.patch("/:idUsuario", validateToken, usuario.updateUsuario);

routes.patch("/password/:idUsuario", validateToken, usuario.updateUsuarioPassword);


module.exports = routes