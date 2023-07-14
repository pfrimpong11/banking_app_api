// const Pool = require("pg").Pool;
import p from "pg"
const Pool = p.Pool

const pool = new Pool({
    user:"isaac_sakyi",
    host:"localhost",
    database:"banking_db",
    password:"database_manager1",
    port:5432
})

export default pool