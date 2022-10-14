const { check } = require('express-validator') 
const { validateResult } = require('../Helpers/validateHelper')

const validateCreate = [
    check('nombre')
    .exists().not()
    .isEmpty(),

    check('descripcion')
    .exists().not()
    .isEmpty(),

    check('precio')
    .exists()
    .isNumeric(),

    check('unidades')
    .exists()
    .isNumeric(),

    (req,res,next) => {
        validateResult(req,res,next)
    }

]

module.exports = {validateCreate}