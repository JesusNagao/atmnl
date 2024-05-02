//const { eventWrapper } = require('@testing-library/user-event/dist/utils');
const express = require('express');
//require('dotenv').config()
const md5 = require('md5');
const sql = require('mssql');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("build"));

var config = {
  "user": process.env.admin_user, // Database username
  "password": process.env.pass, // Database password
  "server": process.env.SERVER, // Server IP address
  "database": process.env.db, // Database name
  "options": {
      "encrypt": false // Disable encryption
  }
}

sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});


app.get('/hello', (req, res) =>{
  res.send('Hello World')
});

app.post('/hello', (req, res) => {
  new sql.Request().query("SELECT * FROM tbl_News", (err, result) => {
    if (err) {
        console.error("Error executing query:", err);
    } else {
        res.send(result.recordset); // Send query result as response
        //console.dir(result.recordset);
        console.log("Query Successful")
    }
  });

  //res.send("Query Successful")
});

app.post('/newClub', (req, res) => {
  var nameval = "\'TT con Orden\'";
  //var lat = 1.0
  //var lng = 1.0
  var phoneval = 8992253119
  var emailval = "\'ttconorden@gmail.com\'";
  var logoURLval = "\'../assets/club logos/ttconorden.jpg\'";

  query = "INSERT INTO [atmnldev].[dbo].[tbl_Club] (name, phone, email, logoURL) VALUES (" + nameval + ", " + phoneval + ", " + emailval + ", " + logoURLval + ");"

  new sql.Request().query(query, (err, result) => {
    if (err) {
        console.error("Error executing query:", err);
    } else {
        res.send(result.recordset); // Send query result as response
        //console.dir(result.recordset);
        console.log("Query Successful")
    }
  });
});



app.listen(port, () => console.log("Server Started"));