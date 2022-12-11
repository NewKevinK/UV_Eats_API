export const SPI_producto = "INSERT INTO producto SET ?";
export const SPS_producto = "SELECT idProducto, nombre, descripcion, precio, unidades, numLike, numDislike FROM producto";
export const SPS_productoID = "SELECT idProducto, nombre, descripcion, precio, unidades, numLike, numDislike FROM producto WHERE idProducto = ?";
export const SPD_producto = "DELETE FROM producto WHERE idProducto = ?";
export const SPA_producto = "UPDATE producto SET ? WHERE idProducto = ?";

export const SPA_productoLike = "UPDATE producto SET numLike = numLike+1 WHERE idProducto = ?";
export const SPA_productoDislike = "UPDATE producto SET numDislike = numDislike+1 WHERE idProducto = ?";
export const SPI_productoAddFav = "INSERT INTO favorito SET ?";
export const SPD_productoQuitFav = "DELETE FROM favorito WHERE idUsuario = ? and idProducto = ? ";

/*
module.exports = {
    'SPI_producto' : SPI_producto,
    'SPS_producto' : SPS_producto,
    'SPS_productoID' : SPS_productoID,
    'SPD_producto' : SPD_producto,
    'SPA_producto' : SPA_producto,

    'SPA_productoLike' : SPA_productoLike,
    'SPA_productoDislike' : SPA_productoDislike,
    'SPI_productoAddFav' : SPI_productoAddFav,
    'SPD_productoQuitFav' : SPD_productoQuitFav
} */