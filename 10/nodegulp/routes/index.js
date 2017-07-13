var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test'
});
/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM `news` where 1',  function(err, rows) {
        console.log(rows);
        res.json(rows);
    })
});

module.exports = router;
