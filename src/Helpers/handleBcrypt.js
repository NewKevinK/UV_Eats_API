//const bcrypt = require('bcryptjs')
import bcrypt from 'bcryptjs'

const encrypt = async (texto) => {
    const hash = await bcrypt.hash(texto, 8);
    return hash;
}

const compare = async (password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash);
}

export const methods = {
    encrypt,
    compare
}
/*
module.exports = {
    encrypt,
    compare
}*/

