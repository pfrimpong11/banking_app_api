import pool from "../../models/DBconfig.js"
import {queries} from "../../queries/queries.js"
import {StatusCodes} from "http-status-codes"
import { createMessage } from "../../util/generateErrorMessage.js"


export const checkDuplicate = async (req,res,next)=>{
    try {
  
        const {email,ghana_card_number,phone} =  req.body
        const promEmail =  pool.query(queries.checkEmailExists, [email])
        const promGhanaCard =   pool.query(queries.getByGhanaCard, [ghana_card_number])
        const promPhone =   pool.query(queries.getByPhoneNumber, [phone])

        const result = await Promise.all([promEmail,promGhanaCard,promPhone])
        // const 
        
        let queryObj  = {email:result[0].rows,card:result[1].rows,phone:result[2].rows}

        const msg = createMessage(queryObj)
      console.log(msg, "form check duplicates")

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