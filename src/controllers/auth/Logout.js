const { StatusCodes } = require("http-status-codes")

const logout = (req,res)=>{
    
    res.cookie("token","")
    return res.status(StatusCodes.OK).
    json({success:true, message:"logout successfull"})
}


module.exports = logout