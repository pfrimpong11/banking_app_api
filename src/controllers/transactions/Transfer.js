const  { StatusCodes } = require( "http-status-codes")
const  pool = require( "../../models/DBconfig.js")
const  { queries } = require( "../../queries/queries.js")

// 059 4992251 ---> Benjamin


const transaction =  async (req, res)=>{

    const {from_account_number, amount, to_account_number} =  req.body
    try {
        

// check if the account has sufficient balance
        const sourceAccountBalance = await pool.query('SELECT balance FROM customer WHERE account_number = $1', [from_account_number]);

        if (+sourceAccountBalance.rows[0].balance < +amount) {
        
            return res.status(StatusCodes.BAD_REQUEST).json({           success:false, 
            message:`Your balance is not suffiecient  to perform this transfer. Your balance is ${sourceAccountBalance.rows[0].balance}`
        })
          }
          // Perform the transaction
    const begin =  pool.query('BEGIN');
         
      const debit =   pool.query(queries.debitAccount,[from_account_number, amount])
     

      const credit =   pool.query(queries.creditAccount,[to_account_number,amount])
      

    const commit =  pool.query('COMMIT');
    
     await Promise.all([begin,debit,credit,commit])
    
    return res.status(200).json({success:true, message:`Amount of Gh₵${amount} sent to ${to_account_number}`})
        
    } catch (error) {
        await pool.query('ROLLBACK');
        res.status(StatusCodes.EXPECTATION_FAILED).json({success:false, message:"Transaction failed !!!"})
        
    }
}

module.exports =  transaction