const express = require('express');
const local_router = express.Router();
const mysql = require('mysql');
const dbconfig = require('../config/database.js');
const conn = mysql.createConnection(dbconfig);

local_router.use(express.json());
// this part seperate database data and send to web
local_router.get('/1', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%대전광역시%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/2', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%서울특별시%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/3', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%경기도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/4', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%충청북도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/5', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%전라남도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/6', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%전라북도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/7', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%충청남도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/8', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%경상북도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/9', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%경상남도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/10', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%인천광역시%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/11', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%광주광역시%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/12', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%울산광역시%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/13', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%부산광역시%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/14', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%강원도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});
local_router.get('/15', async(req, res) => {
    conn.query('SELECT * from travel_info WHERE travel_location LIKE ' + "'%제주특별자치도%'", (error, rows) => {
        if (error) throw error;
        console.log('connected to users');
        res.send(rows);
    });
});


module.exports = local_router;