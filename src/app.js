const express = require('express');
const morgan = require('morgan');
require("dotenv").config();
const userRoute = require("./routes/user");
const path = require('path');

// Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node MySQL API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:1999",
            },
        ],
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
};


// Settings
const app = express();
const port = process.env.PORT || 1999;

// Middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.use(morgan('dev'));

// Routes 
app.get("/", (req, res) => {
  res.send("Welcome to my API");
}); 


// Extras
app.listen(port, () => console.log("Server listening to", port));
export default app;


