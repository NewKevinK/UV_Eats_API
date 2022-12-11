//const express = require('express')
import express from 'express'
const routes = express.Router()
//const {validateCreate} = require('../Validators/testV.js')
import { validateToken } from '../Helpers/jwtHelper.js';
import {methods as test} from "../Controllers/test.js";


routes.post("/",  test.addTest);
routes.get("/", validateToken, test.getTests);
routes.get("/:id",test.getTest);




export default routes;
//module.exports = routes
