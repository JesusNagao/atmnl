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

/*sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});
*/

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

app.post('/newUser',(req, res) => {
  var msg = "Hello, this is my password";
  console.log(md5(msg));
  res.send("New User Added");
});

app.listen(port, () => console.log("Server Started"));