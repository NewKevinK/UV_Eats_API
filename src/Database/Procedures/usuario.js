const SPI_usuario = "INSERT INTO usuario SET ?";
const SPS_usuario = "SELECT nombre, apellido, email FROM usuario";
const SPS_usuarioID = "SELECT nombre, apellido, email FROM usuario WHERE idUsuario = ?";
const SPD_usuario = "DELETE FROM usuario WHERE idUsuario = ?";
const SPA_usuario = "UPDATE usuario SET ? WHERE idUsuario = ?";
const SPA_usuarioPassword = "UPDATE usuario SET ? WHERE idUsuario = ?";


module.exports = {
    'SPI_usuario' : SPI_usuario,
    'SPS_usuario' : SPS_usuario,
    'SPS_usuarioID' : SPS_usuarioID,
    'SPD_usuario' : SPD_usuario,
    'SPA_usuario' : SPA_usuario,
    'SPA_usuarioPassword' : SPA_usuarioPassword

}