const express = require('express');
require('dotenv').config()
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 3000;

const sqlConfig = {
    user: process.env.admin,
    password: process.env.pass,
    database: process.env.db,
    server:process.env.SERVER,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
  }

async () => {
    try {
     // make sure that any items are correctly URL encoded in the connection string
     await sql.connect(sqlConfig)
     const result = await sql.query`select * from tbl_News`
     console.dir(result)
    } catch (err) {
     // ... error checks
    }
   }

app.use(express.static("build"));

app.post('/hello', (req, res) => {
    
});

app.listen(port, () => console.log("Server Started"));