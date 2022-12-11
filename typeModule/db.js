import {createPool} from 'mysql2/promise'


//import { DB_USER, DB_NAME, DB_PWD, SERVER } from "../../typeModule/config.js";
import { DB_USER , DB_NAME, DB_PWD, SERVER } from './config.js'
export const pool = createPool({
  user: 'adminDango',
  password: "Dango123",
  host: SERVER,
  database: "uveats"
})