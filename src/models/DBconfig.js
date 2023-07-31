const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: "postgres://default:m69BzKeyLvEl@ep-bitter-sun-621786-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15?sslmode=require",
  password:"m69BzKeyLvEl",
  host:"ep-bitter-sun-621786-pooler.us-east-1.postgres.vercel-storage.com",
  user:"default",
  database:"verceldb"
})

module.exports =  pool




