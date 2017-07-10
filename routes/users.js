var express = require('express');
var router = express.Router();

var db = require('../db/mysql.js');
var pool = db();

pool.getConnection(function(err, connection) {
  connection.query('SELECT * FROM users', function (error, results, fields) {
    console.log('Statutul utilizatorului este : ', results[0].Statut);
  	router.get('/', function(req, res, next) {
		res.send(results[0]);
	});
    connection.release();

    if (error) throw error;
  });
});

module.exports = router;
