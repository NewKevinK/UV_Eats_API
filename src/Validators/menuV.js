const { check } = require('express-validator') 
const { validateResult } = require('../Helpers/validateHelper')

const validateCreate = [
    check('nombre')
    .exists().not()
    .isEmpty(),

    check('descripcion')
    .exists().not()
    .isEmpty(),

    (req,res,next) => {
        validateResult(req,res,next)
    }

]

module.exports = {validateCreate}