const express = require('express');
const sql = require('mysql');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

const connection = sql.createConnection({
    host: process.env.SERVER,
    user: process.env.admin,
    password: process.env.pass,
    database: process.env.db
});

connection.connect((err) => {
    if (err) {
    console.error('Error connecting to the database:', err);
    return;
    }
    console.log('Connected to the database!');
   });


app.use(express.static("build"));

app.post('/hello', (req, res) => {
    console.log('Hello World')
    res.send("Hello World")
})

app.listen(port, () => console.log("Server Started"));