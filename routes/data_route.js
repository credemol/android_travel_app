const express = require('express');
const data_router = express.Router();
const mysql = require('mysql');
const dbconfig = require('../config/database.js');
const conn = mysql.createConnection(dbconfig);

// api정보를 받아오고 저장하는데 사용.
data_router.use(express.json());
const pageNo = 1;
const serviceKey = 'yourkey'
var request = require('request');
var options = {
    'method': 'GET',
    'url': 'your api' +
        serviceKey + '&pageNo=' +
        pageNo + '&numOfRows=600&type=json',
    'headers': {}
};
/* use it when api data insert in your database
request(options, function(error, response, body) {
    if (error) {
        throw new Error(error);
    }
    let first, second, third;
    let info = JSON.parse(body);

    for (i in info['response']['body']['items']) {
        first = info['response']['body']['items'][i]['trrsrtNm'];
        second = info['response']['body']['items'][i]['rdnmadr'];
        third = info['response']['body']['items'][i]['trrsrtIntrcn'];
        //console.log(first);
        var sql = "INSERT INTO travel_info (travel_Nm,travel_location ,travel_info, num) VALUES (?)";
        var values = [
            first, second, third, i
        ];

        conn.query(sql, [values], function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
    }
});
*/
// get json data 
data_router.post('/', async(req, res) => {
    var ID = req.body.ID;
    var PassWord = req.body.PassWord;
    var Info = req.body.Info;

    // 삽입을 수행하는 sql문.

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
module.exports = data_router;