const { StatusCodes } = require( "http-status-codes")
const { verifyJwt } = require( "../authentication/verifyJwt")

const isAdmin = (req, res, next)=>{
    return  verifyJwt(req,res,()=>{
        if (!req.user.isAdmin){
            return res.status(StatusCodes.UNAUTHORIZED).json({
                success:false,
                message:"Your are not authorized to access this route"
              })
        }
        else{
            next()
        }
    })
}

module.exports = isAdmin