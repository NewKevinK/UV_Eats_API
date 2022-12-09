const express = require('express')
const routes = express.Router()
const {validateCreate} = require('../Validators/productoV.js')
const { validateToken } = require('../Helpers/jwtHelper.js');
import {methods as producto} from "../Controllers/producto.js";

routes.post("/", validateToken, validateCreate, producto.addProducto);
routes.get("/", validateToken, producto.getProducto);
routes.get("/:idProducto", validateToken, producto.getProductoID);
routes.delete("/:idProducto", validateToken, producto.deleteProducto);
routes.patch("/:idProducto", validateToken,  validateCreate, producto.updateProducto);

routes.patch("/like/:idProducto", validateToken, producto.updateProductoLike);
routes.patch("/dislike/:idProducto", validateToken, producto.updateProductoDislike);

routes.post("/addFav", validateToken, producto.addProductoFav);
routes.delete("/quitFav", validateToken, producto.deleteProductoFav);

module.exports = routes