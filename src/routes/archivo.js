const express = require('express')
const routes = express.Router()

const controller = require('../Controllers/archivo')
import { methods as archivo } from '../Controllers/archivo'

routes.post("/uploadCat/", controller.multer, archivo.uploadCategoria );
routes.post("/uploadMen/", controller.multer, archivo.uploadMenu );
routes.post("/uploadPro/", controller.multer, archivo.uploadProducto );


module.exports = routes