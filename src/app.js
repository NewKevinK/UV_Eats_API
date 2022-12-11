

//const express = require('express');
//const morgan = require('morgan');
//require("dotenv").config();
//const path = require('path');

import express from 'express'
import morgan from 'morgan'
import path from 'path'

import testRoutes from "./routes/test.js"; 
import productoRoutes from "./routes/producto.js";
import usuarioRoutes from "./routes/usuario.js";
import authRoutes from "./routes/auth.js";
import categoriaRoutes from "./routes/categoria.js";
import menuRoutes from "./routes/menu.js";
import carroRoutes from "./routes/carroCompra.js";
import ordenRoutes from "./routes/orden.js"; 
import archivoRoutes from "./routes/archivo.js"; 


// Swagger 
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
//const swaggerUI = require('swagger-ui-express');
//const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node MySQL API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:5999",
            },
        ],
    },
    apis: [`${path.join( "./routes/test/*.js")}`],
}; 


// Settings
const app = express();
const port = process.env.PORT || 1999;

// Middlewares
app.use(express.json());
//app.use("/api/doc/", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Routes 
app.get("/", (req, res) => {
  res.send("Welcome to my API");
}); 

app.use("/api/test/",testRoutes); 
app.use("/api/producto/",productoRoutes);
app.use("/api/usuario/",usuarioRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/categoria", categoriaRoutes);
app.use("/api/menu/",menuRoutes);
app.use("/api/carro/",carroRoutes);
app.use("/api/orden/",ordenRoutes); 
app.use("/api/archivo/", archivoRoutes); 

// Extras
app.listen(port, () => console.log("Server listening to", port));

export default app;
//module.exports = app;


