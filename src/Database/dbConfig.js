import mysql from "promise-mysql";
//require('dotenv').config()


import { DB_USER, DB_NAME, DB_PWD, SERVER } from "../../typeModule/config.js";

const connection = mysql.createConnection({
    /*host: process.env.SERVER,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PWD */
    host: SERVER,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PWD
});

const getConnection = () => {
    return connection;
};
 
export default getConnection;
/*
module.exports = {
    getConnection
}; 
*/