import  getConnection  from "../Database/dbConfig.js"
//import { SPS_carroCompraID } from "../Database/Procedures/carroCompra";
import { SPI_orden, SPS_orden, SPS_ordenID } from "../Database/Procedures/orden.js";
//import { getDate, subCar, ordenProductos, resetCar } from "../Helpers/others.js";
import { method } from "../Helpers/others.js";

const addOrden = async (req,res) => {
    try{
        const {idUsuario, estado} = req.body;
        const date = await method.getDate();
        let tot = await method.subCar(idUsuario);
        const orden = {fecha : date, total : tot, estado, idUsuario, idCarro : idUsuario};
        
        const connection = await getConnection();
        const result = await connection.query(SPI_orden, orden);
        var data=JSON.parse(JSON.stringify(result));

      
        console.log(data.insertId);

        const ordenP = await method.ordenProductos(idUsuario, data.insertId);
        const resetC = await method.resetCar(idUsuario);
        res.json({ message: "orden added" });
        
        
    }catch(error){
        res.status(500);
        res.send(error.message);           
    }
}

const getOrden = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query(SPS_orden);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getOrdenID = async (req,res) => {
    try{
        const { idCarro } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPS_ordenID, idCarro);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getOrdenProducto = async (req,res) => {
    try{
        const { idOrden } = req.params;

        const connection = await getConnection();
        const result = await connection.query(`SELECT idProducto, producto, cantidad, precio FROM orden_producto WHERE idOrden = ${idOrden}`);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}




export const methods = {
    addOrden,
    getOrden,
    getOrdenID,
    getOrdenProducto
}