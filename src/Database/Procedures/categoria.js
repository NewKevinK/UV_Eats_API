export const SPI_categoria = "INSERT INTO categoria SET ?";
export const SPS_categoria = "SELECT idCategoria, nombre, descripcion FROM categoria";
export const SPS_categoriaID = "SELECT idCategoria, nombre, descripcion FROM categoria WHERE idCategoria = ?";
export const SPD_categoria = "DELETE FROM categoria WHERE idCategoria = ?";
export const SPA_categoria = "UPDATE categoria SET ? WHERE idCategoria = ?";

/*
module.exports = {
    'SPI_categoria' : SPI_categoria,
    'SPS_categoria' : SPS_categoria,
    'SPS_categoriaID' : SPS_categoriaID,
    'SPD_categoria' : SPD_categoria,
    'SPA_categoria' : SPA_categoria
} */