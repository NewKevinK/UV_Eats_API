const { check } = require('express-validator') 
const { validateResult } = require('../Helpers/validateHelper')

const validateCreate = [
    check('nombre')
    .exists().not()
    .isEmpty(),

    check('apellido')
    .exists().not()
    .isEmpty(),

    check('email')
    .exists()
    .isEmail(),

    check('password')
    .exists()
    .isLength({min:6})  ,

    (req,res,next) => {
        validateResult(req,res,next)
    }

]

module.exports = {validateCreate}