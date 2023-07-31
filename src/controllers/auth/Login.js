const  { StatusCodes } = require( "http-status-codes");
const  pool = require( "../../models/DBconfig.js");
const  { queries } = require( "../../queries/queries.js");
const  bcrypt = require( "bcryptjs");
const  jwt = require( "jsonwebtoken")

 const login = async (req,res)=>{

    const {email, password} =  req.body;
        console.log({email, password})
    try {
        const user =  await pool.query(queries.getByEmail,[email])
        console.log(user.rowCount)
        if (!user)
        {
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false, message:"Credentials incorrect"
            })
        }
        // return res.json(user.rows[0])
        console.log(password)
        const isMatch =  await bcrypt.compare(password,user.rows[0].password)
        if (!isMatch)
        {
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false, message:"Credentials incorrect"
            })
        }
        const verifiedUser = user.rows[0];
        const token = jwt.sign({id:verifiedUser._id,firstname:verifiedUser.first_name},process.env.JWT_SECRET)

        return res.cookie("token",token).json({
            success:true,message:"Login successfull"
        })

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            message:error.message,
            payload:error
        })
        
    }


}

module.exports = login