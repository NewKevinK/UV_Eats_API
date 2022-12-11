export const SPI_orden = "INSERT INTO orden SET ?";
export const SPS_orden = "SELECT idOrden, fecha, total, estado, idUsuario, idCarro FROM orden";
export const SPS_ordenID = "SELECT idOrden, fecha, total, estado, idUsuario, idCarro FROM orden WHERE idCarro = ? ";


export const SPI_ordenProducto = "INSERT INTO orden_producto SET ?";


/*
module.exports = {
    'SPI_orden' : SPI_orden,
    'SPS_orden' : SPS_orden,
    'SPS_ordenID' : SPS_ordenID, 

    'SPI_ordenProducto' : SPI_ordenProducto
}*/