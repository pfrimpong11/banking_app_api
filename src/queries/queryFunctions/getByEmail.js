import { StatusCodes } from "http-status-codes"
import { queries } from "../queries.js"
import pool from "../../models/DBconfig.js"

export const getByEmail =  (email,fns) =>{

   
    pool.query(queries.checkEmailExists ,[email],(error,result)=>{
        
        if(error){
            console.log(error.message)
            return {success:"false",message:error.message}
        }
       
       return fns(result.rowCount)
    }) 
}