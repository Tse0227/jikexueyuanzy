var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test'
});
/* GET users listing. */
router.get('/getbyid', function(req, res, next) {
    var newid = req.query.newsid;
    connection.query('SELECT * FROM `news` where `newid` = ?', [newid], function(err, rows) {
        console.log(rows);
        res.json(rows);
    })
});
router.post('/update', function(req, res) {
    var news_id = req.body.newids;
    new_text = req.body.newtitles;
    connection.query('UPDATE `news` SET `newtitle` = ?  where `newid` = ? ', [new_text, news_id], function(err, result) {
        // console.log("slfkaslf" + result);
        if (!err) {
            res.json(result);
        }

    });
});
router.post('/dellist', function(req, res) {
    var news_id = req.body.newids;

    connection.query('DELETE  FROM `news` WHERE `news`.`newid`= ?', [news_id], function(err, result) {
        // console.log("slfkaslf" + result);
        if (!err) {
            res.json(result);

        }
    });
});
router.post('/add', function(req, res) {
    var newtetxt = req.body.newtextssss;
    connection.query('INSERT INTO `news`(`newid`, `newtitle`) VALUES (\' \',?);', [newtetxt], function(err, result) {
        // console.log("slfkaslf" + result);
      
        if (!err) res.json(result);
    });
});
module.exports = router;
