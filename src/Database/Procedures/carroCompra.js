const SPI_carroCompra = "INSERT INTO carrocompra SET ?";
const SPS_carroCompra = "SELECT idCarro, totalProductos, subTotal, idUsuario FROM carrocompra";
const SPS_carroCompraID = "SELECT idCarro, totalProductos, subtotal, idUsuario FROM carrocompra WHERE idCarro = ?";
const SPD_carroCompra = "DELETE FROM carritocompra WHERE idCarro = ?";

const SPI_carroProducto = "INSERT INTO carro_producto SET ?";

const SPS_carroProductoID = "SELECT p.idProducto AS 'idProducto', p.nombre AS 'producto', c.cantidad AS 'cantidad', c.precio * c.cantidad AS 'precio' FROM carro_producto c LEFT JOIN producto p ON c.idProducto = p.idProducto WHERE idCarro = ? ";




module.exports = {
    'SPI_carroCompra' : SPI_carroCompra,
    'SPS_carroCompra' : SPS_carroCompra,
    'SPS_carroCompraID' : SPS_carroCompraID,
    'SPD_carroCompra' : SPD_carroCompra,

    'SPI_carroProducto' : SPI_carroProducto,

    'SPS_carroProductoID' : SPS_carroProductoID
}