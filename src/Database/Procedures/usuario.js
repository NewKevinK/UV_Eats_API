const SPI_usuario = "INSERT INTO usuario SET ?";
const SPS_usuario = "SELECT nombre, apellido, email, password FROM usuario";


module.exports = {
    'SPI_usuario' : SPI_usuario,
    'SPS_usuario' : SPS_usuario

}