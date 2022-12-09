const express = require('express')
const routes = express.Router()

import {methods as orden} from "../Controllers/orden.js";
const { validateToken } = require('../Helpers/jwtHelper');

routes.post("/", validateToken, orden.addOrden);
routes.get("/", validateToken, orden.getOrden);
routes.get("/:idOrden", validateToken, orden.getOrdenID);

module.exports = routes