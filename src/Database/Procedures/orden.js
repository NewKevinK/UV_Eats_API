const SPI_orden = "INSERT INTO orden SET ?";
const SPS_orden = "SELECT idOrden, fecha, total, estado, idUsuario, idCarro FROM orden";
const SPS_ordenID = "SELECT idOrden, fecha, total, estado, idUsuario, idCarro FROM orden WHERE idCarro = ? ";


const SPI_ordenProducto = "INSERT INTO orden_producto SET ?";
const SPS_ordenProductoID = "";



module.exports = {
    'SPI_orden' : SPI_orden,
    'SPS_orden' : SPS_orden,
    'SPS_ordenID' : SPS_ordenID, 

    'SPI_ordenProducto' : SPI_ordenProducto
}