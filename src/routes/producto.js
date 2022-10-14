const express = require('express')
const routes = express.Router()
const {validateCreate} = require('../Validators/productoV')
import {methods as producto} from "../Controllers/producto";

routes.post("/", validateCreate, producto.addProducto);
routes.get("/",producto.getProducto);
routes.get("/:idProducto",producto.getProductoID);
routes.delete("/:idProducto",producto.deleteProducto);
routes.patch("/:idProducto", validateCreate, producto.updateProducto);

routes.patch("/like/:idProducto",producto.updateProductoLike);
routes.patch("/dislike/:idProducto",producto.updateProductoDislike);

module.exports = routes