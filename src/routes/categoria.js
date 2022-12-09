const express = require('express')
const routes = express.Router()

const {validateCreate} = require("../Validators/categoriaV")
const { validateToken } = require('../Helpers/jwtHelper')
import {methods as categoria} from "../Controllers/categoria.js";

routes.post("/", validateToken, validateCreate, categoria.addCategoria);
routes.get("/", validateToken, categoria.getCategoria);
routes.get("/:idCategoria", validateToken, categoria.getCategoriaID);
routes.delete("/:idCategoria", validateToken, categoria.deleteCategoria);
routes.patch("/:idCategoria", validateToken, validateCreate, categoria.updateCategoria);

module.exports = routes