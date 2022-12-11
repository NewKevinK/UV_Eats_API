import express from 'express'
//const express = require('express')
const routes = express.Router()

import {methods as carroCompra} from "../Controllers/carroCompra.js";
//const { validateToken } = require('../Helpers/jwtHelper');
import { validateToken } from '../Helpers/jwtHelper.js';

routes.get("/", validateToken, carroCompra.getCarroCompra);
routes.get("/:idCarro", validateToken,  carroCompra.getCarroCompraID);
routes.delete("/:iCarro", validateToken, carroCompra.deleteCarroCompra);

routes.post("/addCar", validateToken, carroCompra.addCarroProducto);
routes.post("/quitCar", validateToken, carroCompra.quitCarroProducto);
routes.get("/carroProducto/:idCarro", validateToken, carroCompra.getCarroProductoID);

export default routes;
//module.exports = routes