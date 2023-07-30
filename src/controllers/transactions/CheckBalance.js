import pool from "../../models/DBconfig.js"
import { queries } from "../../queries/queries.js"





const checkBalance  = async (req,res) =>{

    const {account_number} =  req.body
        const {id} =  req.user.id
        try {
            
        const result = await  pool.query(queries.checkBalance,[id])

        return res.status(200).json({success:true, message: result.rows[0].balance})
            
        } catch (error) {
           console.log(error.message) 
        }
}

export default checkBalance