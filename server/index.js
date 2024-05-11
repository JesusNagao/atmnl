import express from "express";
import md5 from "md5";
import https from "http";
import fs from "fs";


import {getClubs, getNews, getEvents, getUsers} from "./lib/getSQL.js"
import { postClub, postNews } from "./lib/postSQL.js";

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static("build"));

app.post('/newClub', (req, res) => {

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

app.post('/clubs', (req, res) => {
  postClub();
});

app.post('/news', (req, res) => {
  var result = postNews(req.name, req.desc, req.imgURL);
  res.send(result.recordset)
});

app.post('/login', (req, res) => {

});

//PUTTERS


//GETTERS///////////////////////////////////////////////////////
app.get('/clubs', (req, res) =>{
  getClubs().then(result => {
    res.send(result)  
  })
  
});

app.get('/news', (req, res) => {
  getNews().then(result => res.send(result));
});

app.get('/events', (req, res) => {
  getEvents().then(result => res.send(result));
});

app.get('/users', (req, res) => {
  const result = getUsers()
  console.log(result)
  res.send(result)
});

app.get('/print', (req, res) => {
  console.log("Hello From Frontend")
});

////////////////////////////////////////////////////////////////


https.createServer({}, app).listen(port, () => console.log("Server Started"));


