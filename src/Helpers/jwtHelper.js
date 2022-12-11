//const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'
//require('dotenv').config();
//import SECRET_KEY from '../../typeModule/config.js'

export function generateAccessToken(user) {
    return jwt.sign(user, "ITSASECRETK", {expiresIn: '30m'});
}

export function validateToken(req, res, next) {
    try {
        let accessToken = req.headers['authorization'] || req.headers['x-access-token']; 

        if(!accessToken){
            res.json({ message: "Access denied, token?" });
        }
        if(accessToken.startsWith('Bearer ')){
            accessToken = accessToken.slice(7, accessToken.lenght);
        }

        jwt.verify(accessToken, "ITSASECRETK", (err, user) =>{
            if(err){
                res.json({ message: "Access denied, token expired or incorrect" });
            }else{
                next();
            }
        })
    } catch (error) {
        res.status(418);
    }
    
}
/*
module.exports = {
    generateAccessToken,
    validateToken
}  */