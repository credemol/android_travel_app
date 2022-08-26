const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

// configuration =========================
// app.set('port', process.env.PORT || 3001);

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Main');
});

app.listen(PORT, () => {
    console.log(`The Express server is listening : ${PORT}`)
});

const userRoute = require('./routes/route');
const dataRoute = require('./routes/data_route');
const localRoute = require('./routes/local_route');

app.use('/user', userRoute);
app.use('/data', dataRoute);
app.use('/local', localRoute);