//const express = require('express')
import express from 'express'
const routes = express.Router()

import {methods as orden} from "../Controllers/orden.js";
//const { validateToken } = require('../Helpers/jwtHelper');
import { validateToken } from '../Helpers/jwtHelper.js';

routes.post("/", validateToken, orden.addOrden);
routes.get("/", validateToken, orden.getOrden);
routes.get("/:idCarro", validateToken, orden.getOrdenID);
routes.get("/ordenProducto/:idOrden",validateToken, orden.getOrdenProducto);
//Prueba para arreglar

export default routes;
//module.exports = routes