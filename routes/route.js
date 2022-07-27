const express = require('express');
const user_router = express.Router();
const mysql = require('mysql');
const dbconfig = require('../config/database.js');
const conn = mysql.createConnection(dbconfig);

user_router.use(express.json());

//this js use when you join the homepage but in this travel app project this is not used.
//회원가입한 데이터를 불러올 수 있다. 이번 프로젝트에 사용되지 않았다.
user_router.get('/users', async(req, res) => {
    conn.query('SELECT * from user', (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});

//this js use when post data in database
//회원가입에 사용될 수 있다 이번 프로젝트에 사용되지 않았다. 
//retrofit post 파트와 사용되면 정상 작동.
user_router.post('/users', async(req, res) => {
    var ID = req.body.ID;
    var PassWord = req.body.PassWord;
    var Info = req.body.Info;

    // 삽입을 수행하는 sql문.
    //if (err) throw err;
    //console.log(ID);
    console.log("Connected!");
    var sql = "INSERT INTO user (ID, PassWord, Info) VALUES (?)";
    var values = [
        ID, PassWord, Info
    ];

    await conn.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });

    res.send(req.body);
});


module.exports = user_router;