const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
    let obj = Object.freeze({  code: 0 });
    let x = false;
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        res.status(403)
        res.send({ errors: err.array() })
    }
}

module.exports = { validateResult }