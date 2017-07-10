var mysql = require('mysql');
var db = null;
module.exports = function () {
    if(!db) {
        db = mysql.createPool({
				connectionLimit : 10,
				host     : 'localhost',
				user     : 'root',
				password : 'admin',
				database : 'share_your_food'
			});
     }
    return db;
};