import { getConnection } from "../Database/dbConfig"

const existEmail = async (emailu) => {
    try{
        let connection = await getConnection();
        let result = await connection.query("SELECT email FROM usuario WHERE email = ?", emailu);
        
        var data=JSON.parse(JSON.stringify(result));
        
        if(data[0].email === emailu){
            return true;
        }else{
            return false;
    }
    }catch(error){
    }
}
const findOne = async (emailu) => {
    try {
        let connection = await getConnection();
        let result = await connection.query("SELECT password FROM usuario WHERE email = ?", emailu);
        
        var data=JSON.parse(JSON.stringify(result));
        
        const encryp = data[0].password;
        return encryp;
    } catch (error) {        
    }
}

module.exports = {
    existEmail,
    findOne
}