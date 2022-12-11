import  getConnection  from "../Database/dbConfig.js"
//require('dotenv').config()
import { SPI_archivoCategoria, SPI_archivoMenu, SPI_archivoProducto } from "../Database/Procedures/archivo.js"

//const Multer = require('multer')
import Multer from "multer"
//const FirebaseStorage = require('multer-firebase-storage')
import FirebaseStorage from 'multer-firebase-storage'

export const multer = Multer({
  storage: FirebaseStorage({
    bucketName: 'gs://uveats-upload-file.appspot.com/',
    credentials: {
      clientEmail: "firebase-adminsdk-u6cin@uveats-upload-file.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHbv0xnYyGjkFv\n9ux8M26ovO0FZ2JePavmoSRklns2iWgFTT1p6GRwk+R0v3KnzPD9vHoDrU5XLwOf\n0s4Fd4mdP690v9eFwDPS7fNgrkeKQDCuG9LaX6JetvI91/q16p2XIo9Q9Qd32ZVV\n71bvVDmQ07o4BAl8FTZh5nu5mHGh/Sbm3/gB9iexj7DeWpFxjyNnsyg5KRO+NoZv\n+ynaRYgNVf9EP4g7C+wZKLFrmALBOPlTANCxaq2yEGfeIjQxcb4H8ZShF/zDGtRr\nIpfuQv4Wf9LwbRViGEBnbHzT0u3u+zTyIW9dxWmIxSK3iwo4OMjh/sytv1dx2UdT\nRQB/5v1pAgMBAAECggEAPsW8hCVm2eNkzW0XOnCl4A63PAAygh8/QDRwVAjZd20A\nhMqvDerL0nN6cRThbdef8v2kGgwuoFp39ZJQrn/VnN0yyLipibvZlAa5mDDC680Q\nhXzUfU+kt9M1pCmbDC9wsuV53q2BUEP4MThIUMRd6iv6bS84HQpAN8hoIR7OhYGu\ns0sSLIPh1DFmj0RcE8TSk4c7llEkoh1w/I92KUOmAYVvS/5Om8Y/eeo3FMNS0p5t\nKc+ZclIDGF35PxPIFzsRMYbof+2WbxRdBJ3t7xuZfTvCbHaXEq1/If1ydTnZOke+\nQaXEijQbXlmV8pWeFl4Jhs9IZDWCAmSvOMjMNcU/UQKBgQDot7v4PEBmLV87zeAJ\ny7I0rN9IT/F6CnqXvrP+Sv0dhFfhMTat8JPPIH6xjrXCQZX5K/HHO37dAQLHUDJR\nlwSoJaSXHe7yL2vv5y+fR6OLU8Pnc1N/lRil5LUzObZexjQIyx1FF7UnXjww/Cew\n2vJ/BT8LlY7jDYeckWOdnCtMAwKBgQDbYsuR3yaDBF9iPfakI/DPQLzAt5Ed2zkK\nHohqJfim1bIB3EKnCQgIUYzybDfJ+xQ8Knl6H1p/ZjsHZenW2bqrZWbtcWmYZMl/\nx/h/3F2EbDGfolF8qqO+p+PcHB5EJlVjVhNtcEzZ1uCoHKQF95uS0w8XRy0NMFxe\nluQN+J0zIwKBgE1L+dtR5/IIUAGFOE0Io4Brix5xrztiD6YnaZGlRr1vH+Fkf0z3\nA6FgobRIOobzUeUZe405bcHqfAnH0W7YQmu3VRv8jUlUBv4ARAkbum6kvAU8gRd3\nZmBzvtvs525DVzU0gdxZK4qP+l4q4uQTVUhrba1jV7qC2/BdOkE3hgoRAoGAP/ls\nUYpYKaaRxg05qh3M8DL5l90v1RwDYx8KOqH+A3CXaxF24kyw6fQV/O9vyVeNTAo6\nyFDyS+pc1khyyzNMywRT4nPLDiR92eRPY8G4B5ChW+Kyjn8YJtXAjYQpk0f2aHRG\nUAiKcI/HjV5kulS9KjCf2vLngUwT84Ve1XAlLy8CgYEAlRFtbw2WbsErFgRn2nbs\n7QWZDCWlRDf1ruFjqRBwLuBgi8W/xnOyNJitP+fojNcRpyNDku6hUWWH2sXELrZX\nhD/l6rV3bsVgrRuodG3TlO+//jeShAoNKCWy5rF5cA3fujuNXc7/TcP/CDeoeP7G\nddEBh7fjtkdPIkqf4poJkt4=\n-----END PRIVATE KEY-----\n",
      projectId: "uveats-upload-file"
    }
    ,public : true
    ,unique : true
  }
   
  ) 
})

//export const multer22 = multer.single('myFile');
multer.single('myFile')

//exports.multer = multer.single('myFile')
//export const multerr = multer.single('myFile');
//const mmmulter = multer.single('myFile');
//export default mmmulter
//export default multer = multer.single('myFile')

const multer2 = async () => {

}

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

