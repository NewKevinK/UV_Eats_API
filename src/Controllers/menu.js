import { getConnection } from "../Database/dbConfig"
import { SPA_menu, SPD_menu, SPD_menuProducto, SPI_menu, SPI_menuProducto, SPS_menu, SPS_menuID } from "../Database/Procedures/menu";

const addMenu = async (req,res) => {
    try{
        const {nombre, descripcion} = req.body;
        const menu = {nombre, descripcion};
        
        const connection = await getConnection();
        await connection.query(SPI_menu, menu);
        res.json({ message: "menu added" });
        
    }catch(error){
        res.status(500);
        res.send(error.message);           
    }
}

const getMenu = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query(SPS_menu);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getMenuID = async (req,res) => {
    try{
        const { idMenu } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPS_menuID, idMenu);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const deleteMenu = async (req, res) => {
    try {
        const { idMenu } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPD_menu, idMenu);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateMenu = async (req, res) => {
    try {
        const { idMenu } = req.params;
        const { nombre, descripcion } = req.body;

        const menu = { nombre, descripcion };
        const connection = await getConnection();
        const result = await connection.query(SPA_menu, [menu, idMenu]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addMenuProducto = async (req, res) => {
    try {
        const {idMenu, idProducto} = req.body;
        const menuProducto = {idMenu, idProducto };

        const connection = await getConnection();
        await connection.query(SPI_menuProducto, menuProducto);
        res.json({ message: "producto added to menu" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteMenuProducto = async (req, res) => {
    try {
        const {idMenu, idProducto} = req.body;
        
        const connection = await getConnection();
        const result = await connection.query(SPD_menuProducto, idMenu, idProducto);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




export const methods = {
    addMenu,
    getMenu,
    getMenuID,
    deleteMenu,
    updateMenu,

    addMenuProducto,
    deleteMenuProducto
}