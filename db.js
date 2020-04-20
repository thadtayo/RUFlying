// MySQL wrapper file -- connects to database

const mysql = require('mysql');

const keys = require('./config/keys');
const con = mysql.createConnection({
    host     : keys.host,
    user     : keys.user,
    password : keys.password,
    database : keys.database
});
con.connect(function(err){
    if(err) throw err;
});

module.exports = con;
