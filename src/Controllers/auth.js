import { getConnection } from "../Database/dbConfig"

const loginAuth = async (req,res) => {
    try{
        const {email, password} = req.body;

        const connection = await getConnection();
        const result = await connection.query(SPS_producto);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    loginAuth
}