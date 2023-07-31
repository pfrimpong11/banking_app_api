const  pool = require( "../../models/DBconfig.js")
const  {queries} = require( "../../queries/queries.js")
const  {StatusCodes} = require( "http-status-codes")
const  { createMessage } = require( "../../util/generateErrorMessage.js")


 const checkDuplicate = async (req,res,next)=>{
    try {
  
        const {email,ghana_card_number,phone} =  req.body
        const promEmail =  pool.query(queries.checkEmailExists, [email])
        const promGhanaCard =   pool.query(queries.getByGhanaCard, [ghana_card_number])
        const promPhone =   pool.query(queries.getByPhoneNumber, [phone])

        const result = await Promise.all([promEmail,promGhanaCard,promPhone])
        // const 
        
        let queryObj  = {email:result[0].rows,card:result[1].rows,phone:result[2].rows}

        const msg = createMessage(queryObj)
     // console.log(msg, "form check duplicates")

    if (msg !== "")
    {
        return res.status(StatusCodes.BAD_REQUEST).json({success:false,message:msg})
    }
    else{
        next()
    }
    } 
    catch (error) 
    {

    return res.status(500)
    .json({success:false,message:error.message})
    }

}

module.exports = checkDuplicate
