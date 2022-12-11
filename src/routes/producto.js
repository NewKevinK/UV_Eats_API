//const express = require('express')
import express from 'express'
const routes = express.Router()
//const {validateCreate} = require('../Validators/productoV.js')
//const { validateToken } = require('../Helpers/jwtHelper.js');
import { validateToken } from '../Helpers/jwtHelper.js';
//import {methods as producto} from "../Controllers/producto.js";
//import {methods} from '../Controllers/producto.js'
import { methodsss } from '../Controllers/producto.js';

routes.post("/", validateToken, methodsss.addProducto);
routes.get("/", validateToken, methodsss.getProducto);
routes.get("/:idProducto", validateToken, methodsss.getProductoID);
routes.delete("/:idProducto", validateToken, methodsss.deleteProducto);
routes.patch("/:idProducto", validateToken, methodsss.updateProducto);

routes.patch("/like/:idProducto", validateToken, methodsss.updateProductoLike);
routes.patch("/dislike/:idProducto", validateToken, methodsss.updateProductoDislike);

routes.post("/addFav", validateToken, methodsss.addProductoFav);
routes.delete("/quitFav", validateToken, methodsss.deleteProductoFav);

export default routes;
//module.exports = routes