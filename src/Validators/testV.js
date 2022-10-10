const { check } = require('express-validator') 
const { validateResult } = require('../Helpers/validateHelper')

const validateCreate = [
    check('topMundial')
    .exists()
    .isNumeric(),

    check('pais')
    .exists().not()
    .isEmpty(),

    check('pib')
    .exists()
    .isNumeric(),

    check('fechaRegistro')
    .exists().not()
    .isEmpty(),
    (req,res,next) => {
        validateResult(req,res,next)
    }

]

module.exports = {validateCreate}