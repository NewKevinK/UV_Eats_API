import { getConnection } from "../Database/dbConfig"

const addTest = async (req,res) => {
    try{
        const {topMundial, pais, pib, fechaRegistro} = req.body;
        
        const test = {topMundial, pais, pib, fechaRegistro};

        const connection = await getConnection();

        await connection.query("INSERT INTO test SET ?", test);
        res.json({ message: "test added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getTest = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, topMundial, pais, pib, fechaRegistro FROM test");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    addTest,
    getTest
}