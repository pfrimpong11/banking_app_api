// const Pool = require("pg").Pool;
import p from "pg"
const Pool = p.Pool

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"bankingapp",
    password:"101029052gm",
    port:5432
})

export default pool