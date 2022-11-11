const SPI_menu = "INSERT INTO menu SET ?";
const SPS_menu = "SELECT idMenu, nombre, descripcion FROM menu";
const SPS_menuID = "SELECT idMenu, nombre, descripcion FROM menu WHERE idMenu = ?";
const SPD_menu = "DELETE FROM menu WHERE idMenu = ?";
const SPA_menu = "UPDATE menu SET ? WHERE idMenu = ?";

const SPI_menuProducto = "INSERT INTO menu_producto SET ?";
const SPD_menuProducto = "DELETE FROM menu_producto WHERE idMenu = ? and idProducto = ?";

module.exports = {
    'SPI_menu' : SPI_menu,
    'SPS_menu' : SPS_menu,
    'SPS_menuID' : SPS_menuID,
    'SPD_menu' : SPD_menu,
    'SPA_menu' : SPA_menu,

    'SPI_menuProducto' : SPI_menuProducto,
    'SPD_menuProducto' : SPD_menuProducto
}