import express from "express";
import md5 from "md5";
import {getClubs, getNews, getEvents, getUsers} from "./lib/getSQL.js"
import { postClub } from "./lib/postSQL.js";

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
})

app.post('/login', (req, res) => {

});

//PUTTERS


//GETTERS///////////////////////////////////////////////////////
app.get('/clubs', (req, res) =>{
  getClubs().then(result => res.send(result));
});

app.get('/news', (req, res) => {
  getNews().then(result => res.send(result));
});

app.get('/events', (req, res) => {
  getEvents().then(result => res.send(result));
});

app.get('/users', (req, res) => {
  getUsers().then(result => res.send(result));
});
////////////////////////////////////////////////////////////////



app.listen(port, () => console.log("Server Started"));

