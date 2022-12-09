const express = require('express')
const routes = express.Router()

import {methods as carroCompra} from "../Controllers/carroCompra.js";
const { validateToken } = require('../Helpers/jwtHelper');


routes.get("/", validateToken, carroCompra.getCarroCompra);
routes.get("/:idCarro", validateToken,  carroCompra.getCarroCompraID);
routes.delete("/:iCarro", validateToken, carroCompra.deleteCarroCompra);

routes.post("/addCar", validateToken, carroCompra.addCarroProducto);
routes.post("/quitCar", validateToken, carroCompra.quitCarroProducto);
routes.get("/carroProducto/:idCarro", validateToken, carroCompra.getCarroProductoID);


module.exports = routes