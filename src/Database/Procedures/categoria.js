const SPI_categoria = "INSERT INTO categoria SET ?";
const SPS_categoria = "SELECT idCategoria, nombre, descripcion FROM categoria";
const SPS_categoriaID = "SELECT idCategoria, nombre, descripcion FROM categoria WHERE idCategoria = ?";
const SPD_categoria = "DELETE FROM categoria WHERE idCategoria = ?";
const SPA_categoria = "UPDATE categoria SET ? WHERE idCategoria = ?";

module.exports = {
    'SPI_categoria' : SPI_categoria,
    'SPS_categoria' : SPS_categoria,
    'SPS_categoria' : SPS_categoriaID,
    'SPD_categoria' : SPD_categoria,
    'SPA_categoria' : SPA_categoria
}