const express = require('express')
const routes = express.Router()
const {validateCreate} = require('../Validators/testV.js')
import {methods as test} from "../Controllers/test.js";


routes.post("/", validateCreate, test.addTest);
routes.get("/", test.getTests);
routes.get("/:id",test.getTest);





module.exports = routes
