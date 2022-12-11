//const express = require('express')
import express from 'express'
const routes = express.Router()


//const {validateCreate} = require("../Validators/categoriaV")
//const { validateToken } = require('../Helpers/jwtHelper')
import { validateToken } from '../Helpers/jwtHelper.js';
import {methods as categoria} from "../Controllers/categoria.js";

routes.post("/", validateToken,  categoria.addCategoria);
routes.get("/", validateToken, categoria.getCategoria);
routes.get("/:idCategoria", validateToken, categoria.getCategoriaID);
routes.delete("/:idCategoria", validateToken, categoria.deleteCategoria);
routes.patch("/:idCategoria", validateToken,  categoria.updateCategoria);

//module.exports = routes
export default routes;