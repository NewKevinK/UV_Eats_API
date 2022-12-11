//const express = require('express')
import express from 'express'
const routes = express.Router()
//const {validateCreate} = require('../Validators/productoV.js')
//const { validateToken } = require('../Helpers/jwtHelper.js');
import { validateToken } from '../Helpers/jwtHelper.js';
//import {methods as producto} from "../Controllers/producto.js";
//import {methods} from '../Controllers/producto.js'
import { methodsss } from '../Controllers/producto.js';
import { methodsss as pro } from '../Controllers/producto3.js';

routes.post("/", validateToken, pro.addProducto);
routes.get("/", validateToken, pro.getProducto);
routes.get("/:idProducto", validateToken, pro.getProductoID);
routes.delete("/:idProducto", validateToken, pro.deleteProducto);
routes.patch("/:idProducto", validateToken, pro.updateProducto);

routes.patch("/like/:idProducto", validateToken, pro.updateProductoLike);
routes.patch("/dislike/:idProducto", validateToken, pro.updateProductoDislike);

routes.post("/addFav", validateToken, pro.addProductoFav);
routes.delete("/quitFav", validateToken, pro.deleteProductoFav);

export default routes;
//module.exports = routes