const express = require('express')
const routes = express.Router()

const {validateCreate} = require("../Validators/menuV")
const { validateToken } = require('../Helpers/jwtHelper')
import {methods as menu} from "../Controllers/menu";

routes.post("/", validateToken, validateCreate, menu.addMenu);
routes.get("/", validateToken, menu.getMenu);
routes.get("/:idMenu", validateToken, menu.getMenuID);
routes.delete("/:idMenu", validateToken, menu.deleteMenu);
routes.patch("/:idMenu", validateToken, validateCreate, menu.updateMenu);

module.exports = routes