const express = require('express')
const routes = express.Router()
import {methods as test} from "../Controllers/test";

routes.post("/", test.addTest);
routes.get("/", test.getTest);





module.exports = routes
