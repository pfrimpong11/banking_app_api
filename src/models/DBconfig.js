const Pool = require("pg").Pool;
// import pkg from "pg"

// import fs from "fs"
// import url from "url"
// const {Client} = pkg
// const Pool = pg.Pool

const fs =  require("fs")
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL ,
})






module.exports =  pool




