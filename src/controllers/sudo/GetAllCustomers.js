const pool = require( "../../models/DBconfig.js")
const { queries } = require( "../../queries/queries.js")



const getAllCustomers = async (req,res)=>{


    try {
        const result = await pool.query(queries.getAllCustomers)
        return res.status(200).json({success:true, message:result.rows})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports =  getAllCustomers