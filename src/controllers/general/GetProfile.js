const  { StatusCodes } = require( "http-status-codes")
const  pool = require( "../../models/DBconfig.js");
const  { queries } = require( "../../queries/queries.js")




 const getProfile =  async (req,res)=>{
    try {
    const {id} =  req.user;

    const result =  await pool.query(queries.getById,[id]);

    const {_id, password, updated_at,total_transactions, transaction_date, ...profileInfo} = result.rows[0]

    return res.status(StatusCodes.OK).json({success:true, message:profileInfo})
        
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({success:false, message:error.message})
    }
}

module.exports = getProfile