import { getConnection } from "../Database/dbConfig"
import { SPA_usuario, SPA_usuarioPassword, SPD_usuario, SPI_usuario, SPS_usuario, SPS_usuarioID } from "../Database/Procedures/usuario"
import { encrypt } from "../Helpers/handleBcrypt";
const { existEmail } = require("../Helpers/validateUser")
import {createCarritocompra} from "../Helpers/others"

const addUsuario = async (req,res) => {
    try{
        const {nombre, apellido, email, password} = req.body;
        const existE = await existEmail(email);
        if(!existE){
            const passwordHashed = await encrypt(password);
            const usuario = {nombre, apellido, email, password:passwordHashed};

            const connection = await getConnection();
            const result = await connection.query(SPI_usuario, usuario);
            
            res.json(result);
            const wait = await createCarritocompra(email);
            
        }else{
            res.json({ message: "User already registered" });
            
            return res.status(400);
        }
        
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getUsuario = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query(SPS_usuario);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getUsuarioID = async (req,res) => {
    try{
        const { idUsuario } = req.params;
        const connection = await getConnection();
        const result = await connection.query(SPS_usuarioID, idUsuario);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.params;

        const connection = await getConnection();
        const result = await connection.query(SPD_usuario, idUsuario);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const { nombre, apellido } = req.body;
        const usuario = { nombre, apellido};

        const connection = await getConnection();
        const result = await connection.query(SPA_usuario, [usuario, idUsuario]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuarioPassword = async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const { password } = req.body;
        const passwordHashed = await encrypt(password);
        const usuario = { password: passwordHashed};

        const connection = await getConnection();
        const result = await connection.query(SPA_usuarioPassword, [usuario, idUsuario]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



export const methods = {
    addUsuario,
    getUsuario,
    getUsuarioID,
    deleteUsuario,
    updateUsuario,
    updateUsuarioPassword
}