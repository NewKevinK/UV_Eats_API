import { getConnection } from "../Database/dbConfig"
import { SPA_carroCompraRefresh, SPA_carroProductoAddProducto, SPI_carroCompra, SPI_carroProducto, SPS_carroProductoID } from "../Database/Procedures/carroCompra";
import { SPI_ordenProducto } from "../Database/Procedures/orden";

const getDate = async () => {
    try{
        const d = new Date();
        d.toLocaleDateString('en-GB').split('/').reverse().join('');
        return d;
    }catch(error){
                  
    }
}

const createCarritocompra = async (celular) => {
    try{
        console.log(celular);
        let connection = await getConnection();
        let result = await connection.query("SELECT idUsuario FROM usuario WHERE email = ?" , celular);
        var data = JSON.parse(JSON.stringify(result));
        console.log("El idUsuario es: "+data[0].idUsuario);
        const carrocompra = {idCarro : data[0].idUsuario, totalProductos : 0 , subtotal : 0 , idUsuario : data[0].idUsuario};
        
        let conn = await getConnection();
        let res = await connection.query(SPI_carroCompra, carrocompra); 
        return true;
    }catch(error){
          console.log(error);        
    }
}

const typeAddCarroProducto = async (idProducto, cantidad, precio, idCarro) => {
    try{
        console.log("entro a type: " + idProducto, cantidad, precio, idCarro);
        let connection = await getConnection();
        let result = await connection.query(`SELECT idProducto FROM carro_producto WHERE idProducto = ${idProducto} AND idCarro = ${idCarro} `);
        console.log(result);
        var data=JSON.parse(JSON.stringify(result));
        
        if(data[0].idProducto === idProducto){
            console.log("encontro");
            const connection = await getConnection();
            await connection.query(`UPDATE carro_producto SET cantidad = (cantidad + ${cantidad} ) WHERE idCarro = ${idCarro} AND idProducto = ${idProducto} `);
            return true;
            
        }
        
    } catch (error){
        //console.log(error);  
    }
}

const typeQuitCarroProducto = async (idProducto, cantidad, precio, idCarro) => {
    try{
        console.log("entro a type: " + idProducto, cantidad, precio, idCarro);
        let connection = await getConnection();
        let result = await connection.query(`SELECT cantidad FROM carro_producto WHERE idProducto = ${idProducto} AND idCarro = ${idCarro} `);
        var data=JSON.parse(JSON.stringify(result));
        let number = cantidad - data[0].cantidad;
        if(number < 0){
            console.log("NO Es menor");
            const connection = await getConnection();
            await connection.query(`UPDATE carro_producto SET cantidad = (cantidad - ${cantidad} ) WHERE idCarro = ${idCarro} AND idProducto = ${idProducto} `);
            return true;
        }
        return false;
    } catch (error){
        //console.log(error);  
    }
}

const refreshCarroCompra = async (idCarro) => {
    try{
        let connection = await getConnection();
        await connection.query( `UPDATE carrocompra SET subTotal = (SELECT SUM(cantidad * precio) FROM carro_producto WHERE idCarro = ${idCarro}), totalProductos = (SELECT SUM(cantidad) FROM carro_producto WHERE idCarro = ${idCarro}) WHERE  idCarro = ${idCarro};
        `);
    }catch(error){
                  
    }
}

const subCar = async (idUsuario) => {
    try{
        console.log(idUsuario);
        let connection = await getConnection();
        let result = await connection.query("SELECT subTotal FROM carrocompra WHERE idUsuario = ?" , idUsuario);
        var data=JSON.parse(JSON.stringify(result));
        let number = data[0].subTotal;
        console.log("El subTptal es:  "+number);
        return number;
    }catch(error){
        console.log(error);      
    }
}

const resetCar = async (idCarro) => {
    try{
        console.log(idCarro);
        let connection = await getConnection(); 
        let result = await connection.query("DELETE FROM carro_producto WHERE idCarro = ?" , idCarro);
        //let res = await connection.query("SELECT subTotal FROM carrocompra WHERE idUsuario = ?" , idUsuario);
        const refresh = await refreshCarroCompra( idCarro);
        return true;
    }catch(error){
        console.log(error);      
    }
}

const ordenProductos = async (idCarro, idOrden) => {
    try{
        console.log(idCarro);
        let connection = await getConnection();
        let result = await connection.query(SPS_carroProductoID, idCarro);
        

        let listaProducto = [];
        var data=JSON.parse(JSON.stringify(result));

        for(var i = 0; i < data.length; i++){
            console.log("la posocion es: "+i);
            listaProducto.push(data[i]);
            listaProducto[i].idOrden = idOrden;
            
            let res = await connection.query(SPI_ordenProducto, listaProducto[i]);
        }   
        
        let objeto1 = data[2].producto;
        let objeto2 = listaProducto[0];
        //listaProducto.push(objeto2);
        //console.log(objeto2);
        //console.log("la longitud es: "+data.length);
        console.log("el objeto es: "+listaProducto[0]);
        
        return true;
    }catch(error){
        
        res.send(error);
    }
}



module.exports = {
    getDate,
    createCarritocompra,
    typeAddCarroProducto,
    typeQuitCarroProducto,
    refreshCarroCompra,
    subCar,
    resetCar,
    ordenProductos
}