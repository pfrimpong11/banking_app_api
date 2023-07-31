const  { StatusCodes } = require( "http-status-codes")
const  { queries } = require( "../queries.js")
const  pool = require( "../../models/DBconfig.js")

 const getByEmail =  (email,fns) =>{

   
    pool.query(queries.checkEmailExists ,[email],(error,result)=>{
        
        if(error){
            console.log(error.message)
            return {success:"false",message:error.message}
        }
       
       return fns(result.rowCount)
    }) 
}

module.exports =  getByEmail