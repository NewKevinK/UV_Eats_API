//import { getConnection } from "../Database/dbConfig.js"
//import { getConnection } from '../Database/dbConfig.js'

import { methods } from '../Controllers/test.js';
import getConnection from '../Database/dbConfig.js'
//import moduleA from 'my-library/module-a'
//import helpp from '../Database/Procedures/carroCompra.js'

//import { SPI_carroCompra,  SPS_carroProductoID } from "../Database/Procedures/carroCompra.js";
//import { SPI_ordenProducto } from "../Database/Procedures/orden.js";
//import {methods as queryy} from "../Database/Procedures/orden.js";

 export const getDate = async () => {
    try{
        //const text = queryy.SPI_ordenProducto;
        //console.log(text);
        //const text2 = helpp.SPI_carroCompra;
        const d = new Date();
        d.toLocaleDateString('en-GB').split('/').reverse().join('');
        return d;
    }catch(error){
                  
    }
}

const createCarritocompra = async (celular) => {
    try{
        
        let connection = await getConnection();
        let result = await connection.query("SELECT idUsuario FROM usuario WHERE email = ?" , celular);
        var data = JSON.parse(JSON.stringify(result));
        
        const carrocompra = {idCarro : data[0].idUsuario, totalProductos : 0 , subtotal : 0 , idUsuario : data[0].idUsuario};
        
        let conn = await getConnection();
        let res = await connection.query("INSERT INTO carrocompra SET ?", carrocompra); 
        return true;
    }catch(error){
          console.log(error);        
    }
}

const typeAddCarroProducto = async (idProducto, cantidad, precio, idCarro) => {
    try{
        
        let connection = await getConnection();
        let result = await connection.query(`SELECT idProducto FROM carro_producto WHERE idProducto = ${idProducto} AND idCarro = ${idCarro} `);
        
        var data=JSON.parse(JSON.stringify(result));
        
        if(data[0].idProducto === idProducto){
            
            const connection = await getConnection();
            await connection.query(`UPDATE carro_producto SET cantidad = (cantidad + ${cantidad} ) WHERE idCarro = ${idCarro} AND idProducto = ${idProducto} `);
            return true;
            
        }
        
    } catch (error){
        //console.log(error);  
    }
}

const typeQuitCarroProducto = async (idProducto, cantidad, precio, idCarro) => {
    try{
        
        let connection = await getConnection();
        let result = await connection.query(`SELECT cantidad FROM carro_producto WHERE idProducto = ${idProducto} AND idCarro = ${idCarro} `);
        var data=JSON.parse(JSON.stringify(result));
        let number = cantidad - data[0].cantidad;
        if(number < 0){
            
            const connection = await getConnection();
            await connection.query(`UPDATE carro_producto SET cantidad = (cantidad - ${cantidad} ) WHERE idCarro = ${idCarro} AND idProducto = ${idProducto} `);
            return true;
        }
        return false;
    } catch (error){
        //console.log(error);  
    }
}

const refreshCarroCompra = async (idCarro) => {
    try{
        let connection = await getConnection();
        await connection.query( `UPDATE carrocompra SET subTotal = (SELECT SUM(cantidad * precio) FROM carro_producto WHERE idCarro = ${idCarro}), totalProductos = (SELECT SUM(cantidad) FROM carro_producto WHERE idCarro = ${idCarro}) WHERE  idCarro = ${idCarro};
        `);
    }catch(error){
                  
    }
}

const subCar = async (idUsuario) => {
    try{
        
        let connection = await getConnection();
        let result = await connection.query("SELECT subTotal FROM carrocompra WHERE idUsuario = ?" , idUsuario);
        var data=JSON.parse(JSON.stringify(result));
        let number = data[0].subTotal;
        
        return number;
    }catch(error){
        console.log(error);      
    }
}

const resetCar = async (idCarro) => {
    try{
        
        let connection = await getConnection(); 
        let result = await connection.query("DELETE FROM carro_producto WHERE idCarro = ?" , idCarro);
        
        const refresh = await refreshCarroCompra( idCarro);
        return true;
    }catch(error){
        console.log(error);      
    }
}

const ordenProductos = async (idCarro, idOrden) => {
    try{
        
        let connection = await getConnection();
        let result = await connection.query("SELECT p.idProducto AS 'idProducto', p.nombre AS 'producto', c.cantidad AS 'cantidad', c.precio * c.cantidad AS 'precio' FROM carro_producto c LEFT JOIN producto p ON c.idProducto = p.idProducto WHERE idCarro = ? ", idCarro);
        

        let listaProducto = [];
        var data=JSON.parse(JSON.stringify(result));

        for(var i = 0; i < data.length; i++){
            
            listaProducto.push(data[i]);
            listaProducto[i].idOrden = idOrden;
            
            let res = await connection.query("INSERT INTO orden_producto SET ?", listaProducto[i]);
        }   
        
        
        return true;
    }catch(error){
        
        res.send(error);
    }
}



export const method  = {
    getDate,
    createCarritocompra,
    typeAddCarroProducto,
    typeQuitCarroProducto,
    refreshCarroCompra,
    subCar,
    resetCar,
    ordenProductos
}