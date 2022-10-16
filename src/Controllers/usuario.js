import { getConnection } from "../Database/dbConfig"
import { SPI_usuario, SPS_usuario } from "../Database/Procedures/usuario"
import { encrypt } from "../Helpers/handleBcrypt";

const addUsuario = async (req,res) => {
    try{
        const {nombre, apellido, email, password} = req.body;
        const passwordHashed = await encrypt(password);
        const usuario = {nombre, apellido, email, password:passwordHashed};


        const connection = await getConnection();
        const result = await connection.query(SPI_usuario, usuario);
        res.json(result);
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

export const methods = {
    addUsuario,
    getUsuario
    //getUsuarioID,
    //deleteUsuario,
    //updateUsuario
}