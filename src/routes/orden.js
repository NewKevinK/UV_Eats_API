const express = require('express')
const routes = express.Router()

import {methods as orden} from "../Controllers/orden";

routes.post("/", orden.addOrden);
routes.get("/", orden.getOrden);
routes.get("/:idOrden", orden.getOrdenID);

module.exports = routes