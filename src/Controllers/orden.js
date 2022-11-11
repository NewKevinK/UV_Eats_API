import { getConnection } from "../Database/dbConfig"
import { SPS_carroCompraID } from "../Database/Procedures/carroCompra";
import { SPI_orden } from "../Database/Procedures/orden";
import { getDate, subCar, ordenProductos, resetCar } from "../Helpers/others";

const addOrden = async (req,res) => {
    try{
        const {idUsuario, estado} = req.body;
        const date = await getDate();
        let tot = await subCar(idUsuario);
        const orden = {fecha : date, total : tot, estado, idUsuario, idCarro : idUsuario};
        
        const connection = await getConnection();
        const result = await connection.query(SPI_orden, orden);
        var data=JSON.parse(JSON.stringify(result));

      
        console.log(data.insertId);

        const ordenP = await ordenProductos(idUsuario, data.insertId);
        const resetC = await resetCar(idUsuario);
        res.json({ message: "orden added" });
        
        
    }catch(error){
        res.status(500);
        res.send(error.message);           
    }
}

const getOrden = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query(SPS_categoria);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getOrdenID = async (req,res) => {
    try{
        const { idCategoria } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPS_categoriaID, idCategoria);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    addOrden,
    getOrden,
    getOrdenID
}