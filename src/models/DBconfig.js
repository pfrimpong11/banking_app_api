// const Pool = require("pg").Pool;
import p from "pg"
const Pool = p.Pool

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})



export default pool
