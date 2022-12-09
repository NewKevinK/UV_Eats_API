import { getConnection } from "../Database/dbConfig.js"
import { SPD_categoria, SPI_categoria, SPS_categoria, SPS_categoriaID, SPA_categoria } from "../Database/Procedures/categoria.js";

const addCategoria = async (req,res) => {
    try{
        const {nombre, descripcion} = req.body;
        const categoria = {nombre, descripcion};
        
        const connection = await getConnection();
        await connection.query(SPI_categoria, categoria);
        res.json({ message: "categoria added" });
        
    }catch(error){
        res.status(500);
        res.send(error.message);           
    }
}

const getCategoria = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query(SPS_categoria);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getCategoriaID = async (req,res) => {
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

const deleteCategoria = async (req, res) => {
    try {
        const { idCategoria } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPD_categoria, idCategoria);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateCategoria = async (req, res) => {
    try {
        const { idCategoria } = req.params;
        const { nombre, descripcion } = req.body;

        const categoria = { nombre, descripcion };
        const connection = await getConnection();
        const result = await connection.query(SPA_categoria, [categoria, idCategoria]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




export const methods = {
    addCategoria,
    getCategoria,
    getCategoriaID,
    deleteCategoria,
    updateCategoria
}