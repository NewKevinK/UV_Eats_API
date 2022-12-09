import { getConnection } from "../Database/dbConfig.js"
import { SPD_carroCompra,  SPI_carroProducto, SPS_carroCompra, SPS_carroCompraID, SPS_carroProductoID } from "../Database/Procedures/carroCompra.js";
import { typeAddCarroProducto, typeQuitCarroProducto, refreshCarroCompra } from "../Helpers/others.js";



const getCarroCompra = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query(SPS_carroCompra);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getCarroCompraID = async (req,res) => {
    try{
        const { idCarro } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPS_carroCompraID, idCarro);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const deleteCarroCompra = async (req, res) => {
    try {
        const { idCarro } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPD_carroCompra, idCarro);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCarroProducto = async (req, res) => {
    try{
        const { idProducto, cantidad, precio, idCarro } = req.body;
        const parameter = {idProducto, cantidad, precio, idCarro};
        const existP = await typeAddCarroProducto(idProducto, cantidad, precio, idCarro);
        if(!existP){
            console.log("NO encontroooo");

            const connection = await getConnection();
            await connection.query(SPI_carroProducto, parameter);
        }
        
        res.json({ message: "carroProducto added" });
        const refresh = await refreshCarroCompra( idCarro);

    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const quitCarroProducto = async (req, res) => {
    try{
        const { idProducto, cantidad, precio, idCarro } = req.body;
        const parameter = {idProducto, cantidad, precio, idCarro};
        const minorthat0 = await typeQuitCarroProducto(idProducto, cantidad, precio, idCarro);
        if(!minorthat0){
            console.log("es menor que 0");

            const connection = await getConnection();
            await connection.query(`DELETE FROM carro_producto WHERE idCarro = ${idCarro} AND idProducto = ${idProducto}`);
        }
        res.json({ message: "carroProducto quited" });
        const refresh = await refreshCarroCompra( idCarro);

    } catch(error){

    }
}

const getCarroProductoID = async (req,res) => {
    try{
        const { idCarro } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPS_carroProductoID, idCarro);
        res.json(result);

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}






export const methods = {
    
    getCarroCompra,
    getCarroCompraID,
    deleteCarroCompra,

    addCarroProducto,
    quitCarroProducto,

    getCarroProductoID
}