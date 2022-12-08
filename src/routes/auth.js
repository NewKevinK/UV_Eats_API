const express = require('express')
const routes = express.Router()
import {methods as auth} from "../Controllers/auth";

routes.post("/", auth.loginAuth);

module.exports = routes