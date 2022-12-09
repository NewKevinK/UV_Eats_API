import app from "./app.js";
//var app = require('./app')();

const main=()=>{
    app.listen(app.get("port"));
   

};

main();
