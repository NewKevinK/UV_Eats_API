import  getConnection  from "../Database/dbConfig.js"

import {SPI_test, testbd1, testbd2}  from "../Database/Procedures/test.js";
//import defaults from '../Database/Procedures/test.js'
//import {ordenProductos} from "../Helpers/others.js";

import { pool } from '../../typeModule/db.js'

const addTest = async (req,res) => {
    try{
        
        let {topMundial, pais, pib, fechaRegistro} = req.body;
        let test = {topMundial, pais, pib, fechaRegistro};
        
        //const connection = await getConnection();
        //await connection.query(defaults.SPI_test, test);
        const connection = await getConnection();
        const nresult = await connection.query(SPI_test, test);
        res.json({ message: "test added" });
        
    }catch(error){
        res.status(500);
        res.send(error.message);
                        
    }
}

const getTests = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, topMundial, pais, pib, fechaRegistro FROM test");
        //const test = await ordenProductos(1);
        res.json(result);

        

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getTest = async (req,res) => {
    try{
        const { id } = req.params;
        //const connection = await getConnection();
        //const result = await connection.query("SELECT id, topMundial, pais, pib, fechaRegistro FROM test WHERE id = ?", id);
        console.log("entra a getTest/3");
        const connection = await getConnection();
        const [result] = await connection.query("SELECT id, topMundial, pais, pib, fechaRegistro FROM test WHERE id = ?", id);
        res.json(result[0]);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    addTest,
    getTests,
    getTest
}