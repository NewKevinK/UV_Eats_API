const express = require('express')
const routes = express.Router()

//const {validateCreate} = require("../Validators/categoriaV")
//const { validateToken } = require('../Helpers/jwtHelper')
import {methods as orden} from "../Controllers/orden";

routes.post("/", orden.addOrden);
routes.get("/", orden.getOrden);
routes.get("/:idOrden", orden.getOrdenID);
//routes.delete("/:idCategoria", validateToken, categoria.deleteCategoria);
//routes.patch("/:idCategoria", validateToken, validateCreate, categoria.updateCategoria);

module.exports = routes