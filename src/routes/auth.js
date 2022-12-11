//const express = require('express')
import express from 'express'
const routes = express.Router()
import {methods as auth} from "../Controllers/auth.js";

routes.post("/", auth.loginAuth);

export default routes;
//module.exports = routes