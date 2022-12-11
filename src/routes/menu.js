//const express = require('express')
import express from 'express'
const routes = express.Router()

//const {validateCreate} = require("../Validators/menuV")
//const { validateToken } = require('../Helpers/jwtHelper')
import { validateToken } from '../Helpers/jwtHelper.js';
import {methods as menu} from "../Controllers/menu.js";

routes.post("/", validateToken,  menu.addMenu);
routes.get("/", validateToken, menu.getMenu);
routes.get("/:idMenu", validateToken, menu.getMenuID);
routes.delete("/:idMenu", validateToken, menu.deleteMenu);
routes.patch("/:idMenu", validateToken,  menu.updateMenu);

export default routes;
//module.exports = routes