const express = require('express');
const md5 = require('md5');
const sql = require('mssql');


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


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("build"));

app.post('/newClub', (req, res) => {
  sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
  });
  
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

app.get('/signup', (req, res) =>{

  var query = "SELECT [name] FROM [atmnldev].[dbo].[tbl_Club];"
  console.log(dbconnection(query));
});

app.listen(port, () => console.log("Server Started"));


async function dbconnection(query){

  await new sql.Request().query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return("[]")
    }else{
      //console.log(result.recordset)
      return(result.recordset); // Send query result as response
    }
  });

}
