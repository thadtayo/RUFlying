// used to populate database... not for production

const mysql = require('mysql');
const con = require('./db');
const keys = require('./config/keys');

const db = keys.mysqlURI;
const user = keys.user;
const pass = keys.pass;
const db_name = keys.db_name;

/*
TODO: CHANGE NAMES TO SINGULAR NOT PLURAL
*/

// create Users
// var sql1 = "CREATE TABLE Users (account_num INT, PRIMARY KEY (account_num))";
// con.query(sql1, function (err, result) {
//   if (err) throw err;
//   console.log("Users created");
// });

// // populate table
// var sql2 = "INSERT INTO Users VALUES (123)";
// con.query(sql2, function (err, result) {
//     if (err) throw err;
//     console.log("Populated Users.");
//   });


// create Flights
// add: , FOREIGN KEY(airline_id) REFERENCES AIRLINE(airline_id) ON DELETE CASCADE)
// var sql3 = "CREATE TABLE Flights (flight_num INT, airline_id VARCHAR(2), num_seats INT, working_days VARCHAR(100), fares INT, PRIMARY KEY(flight_num, airline_id))";
// con.query(sql3, function (err, result) {
//   if (err) throw err;
//   console.log("Flights created.");
// });

// // populate table
// var sql4 = "INSERT INTO Flights VALUES (100, \"AL\", 1000, \"Friday\", 100)";
// con.query(sql4, function (err, result) {
//     if (err) throw err;
//     console.log("Populated Flights.");
//   });

var d = 'DROP TABLE Customers';
con.query(d, function(err, ressult){
  if (err) throw err;
  console.log('Created Customers');
})
// Create Customers: , PRIMARY KEY (account_num), FOREIGN KEY (account_num) REFERENCES Users(account_num));
var sql = "CREATE TABLE Customers(account_num INT, email VARCHAR(20), first_name VARCHAR(20), last_name VARCHAR(20), credit_card_num INT, address VARCHAR(50), zip INT, phone INT, preferences VARCHAR(100), state VARCHAR(20))";
con.query(sql, function(err, result){
  if (err) throw err;
  console.log('Created Customers');
});

var sql2 = "INSERT INTO Customers VALUES (1, \"sample@sample.com\", \"Joe\", \"Mama\", 1111, \"10 Address Lane\", 00001, 17891, \"preferences\", \"NJ\");";
con.query(sql2, function(err, result){
  if (err) throw err;
  console.log('Populated Customers.');
});
