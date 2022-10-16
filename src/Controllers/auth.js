import { getConnection } from "../Database/dbConfig"
import { compare } from "../Helpers/handleBcrypt"
const { existEmail, findOne } = require("../Helpers/validateUser")
const { generateAccessToken } = require("../Helpers/jwtHelper")

const loginAuth = async (req,res) => {
    try{
        const {email, password} = req.body;
        const equalEmail = await existEmail(email);
        
        if(equalEmail){
            const encryp = await findOne(email);
            const checkPassword = await compare(password,encryp);

            if(checkPassword){
                const connection = await getConnection();
                const emailUser = {email: email};
                const accessToken = generateAccessToken(emailUser);
                res.header('authorization', accessToken).json({message: "authenticated user", token: accessToken});

            }else{
                res.json({ message: "Wrong password" });
                return res.status(401);
            }

        }else{
            res.json({ message: "No find email" });
            return res.status(404);
        }
        
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    loginAuth
}