// MySQL wrapper file -- connects to database

const mysql = require('mysql');

const keys = require('./config/keys');
const con = mysql.createPool({
    host     : keys.host,
    user     : keys.user,
    password : keys.password,
    database : keys.database
});
/*
after require() this, use con.getConnection(function(err, connection) {
    connection.query(){ connection.release; }
});
*/
module.exports = con;
