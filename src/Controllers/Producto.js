import { getConnection } from "../Database/dbConfig"
import {SPI_producto, SPS_producto, SPS_productoID, SPD_producto, SPA_producto, SPA_productoLike, SPA_productoDislike, SPI_productoAddFav, SPD_productoQuitFav } from "../Database/Procedures/producto";
import { getDate } from "../Helpers/others";

const addProducto = async (req,res) => {
    try{
        const {nombre, descripcion, precio, unidades, numLike=0, numDislike=0} = req.body;
        const producto = {nombre, descripcion, precio, unidades, numLike , numDislike };

        const connection = await getConnection();
        await connection.query(SPI_producto, producto);
        res.json({ message: "producto added" });
        
    }catch(error){
        res.status(500);
        res.send(error.message);           
    }
};

const getProducto = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query(SPS_producto);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getProductoID = async (req,res) => {
    try{
        const { idProducto } = req.params;
        const connection = await getConnection();
        const result = await connection.query(SPS_productoID, idProducto);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPD_producto, idProducto);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const { nombre, descripcion, precio, unidades } = req.body;
        const producto = { nombre, descripcion, precio, unidades };

        const connection = await getConnection();
        const result = await connection.query(SPA_producto, [producto, idProducto]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProductoLike = async (req, res) => {
    try {
        const { idProducto } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPA_productoLike, idProducto);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProductoDislike = async (req, res) => {
    try {
        const { idProducto } = req.params;
        
        const connection = await getConnection();
        const result = await connection.query(SPA_productoDislike, idProducto);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addProductoFav = async (req, res) => {
    try {
        const date = await getDate();
        const {idUsuario, idProducto} = req.body;
        const fav = {idUsuario, idProducto, fecha:date };

        const connection = await getConnection();
        await connection.query(SPI_productoAddFav, fav);
        res.json({ message: "fav added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteProductoFav = async (req, res) => {
    try {
        const {idUsuario, idProducto} = req.body;
        
        const connection = await getConnection();
        const result = await connection.query(SPD_productoQuitFav, idUsuario, idProducto);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    addProducto,
    getProducto,
    getProductoID,
    deleteProducto,
    updateProducto,

    updateProductoLike,
    updateProductoDislike,
    addProductoFav,
    deleteProductoFav
}