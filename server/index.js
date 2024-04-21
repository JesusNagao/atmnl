const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("build"));

app.post('/hello', (req, res) => {
    console.log('Hello World')
    res.send("Hello World")
})

app.listen(port, () => console.log("Server Started"));