const Pool = require("pg").Pool;

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
//   password:process.env.POSTGRES_PASSWORD,
//   host:process.env.POSTGRES_HOST,
//   user:process.env.POSTGRES_USER,
//   database:process.env.POSTGRES_DATABASE
// })
const pool = new Pool({
  password:"default",
  host:"localhost",
  user:  "postgres",
  port:5432,
  database:"banking_db"
})


module.exports =  pool




