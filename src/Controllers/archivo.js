import { getConnection } from "../Database/dbConfig"
require('dotenv').config()
import { SPI_archivoCategoria, SPI_archivoMenu, SPI_archivoProducto } from "../Database/Procedures/archivo"

const Multer = require('multer')
const FirebaseStorage = require('multer-firebase-storage')

const multer = Multer({
  storage: FirebaseStorage({
    bucketName: 'gs://uveats-upload-file.appspot.com/',
    credentials: {
      clientEmail: process.env.CLIENTEMAIL,
      privateKey: process.env.PRIVATEKEY ,
      projectId: process.env.PROJECTID
    }
    ,public : true
    ,unique : true
  }
   
  ) 
})

exports.multer = multer.single('myFile')

const uploadCategoria = async (req,res) => {
    try{
        const {idCategoria} = req.body;
        const uploadF = { idCategoria, url : req.file.publicUrl};

        const connection = await getConnection();
        await connection.query(SPI_archivoCategoria, uploadF);

        res.send({ data: 'imagen recibida'})

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const uploadMenu = async (req,res) => {
    try{
        const {idMenu} = req.body;
        const uploadF = { idMenu, url : req.file.publicUrl};

        const connection = await getConnection();
        await connection.query(SPI_archivoMenu, uploadF);

        res.send({ data: 'imagen recibida'})

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const uploadProducto = async (req,res) => {
    try{
        const {idProducto} = req.body;
        const uploadF = { idProducto, url : req.file.publicUrl};

        const connection = await getConnection();
        await connection.query(SPI_archivoProducto, uploadF);

        res.send({ data: 'imagen recibida'})

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods =  {
    uploadCategoria,
    uploadMenu,
    uploadProducto
}

