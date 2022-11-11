const express = require('express')
const routes = express.Router()

import {methods as carroCompra} from "../Controllers/carroCompra";



routes.get("/", carroCompra.getCarroCompra);
routes.get("/:idCarro",  carroCompra.getCarroCompraID);
routes.delete("/:iCarro", carroCompra.deleteCarroCompra);

routes.post("/addCar", carroCompra.addCarroProducto);
routes.post("/quitCar",carroCompra.quitCarroProducto);
routes.get("/carroProducto/:idCarro", carroCompra.getCarroProductoID);


module.exports = routes