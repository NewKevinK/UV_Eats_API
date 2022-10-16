const bcrypt = require('bcryptjs')

const encrypt = async (texto) => {
    const hash = await bcrypt.hash(texto, 8);
    return hash;
}

const compare = async (password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash);
}

module.exports = {
    encrypt,
    compare
}

