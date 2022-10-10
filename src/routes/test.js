const express = require('express')
const routes = express.Router()
const {validateCreate} = require('../Validators/testV')
import {methods as test} from "../Controllers/test";


routes.post("/", validateCreate, test.addTest);
routes.get("/", test.getTests);
routes.get("/:id",test.getTest);





module.exports = routes
