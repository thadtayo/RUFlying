const express = require('express');
const router = express.Router();
const con = require('../../db');
const uuid = require('uuid');

// get all customers
router.get('/', (req, res) => {
    con.query("SELECT * FROM Customers", function(err, results, fields){
        if(err) throw err;
        res.json(results);
    });
});

// register customer
// TODO: FIX THIS TO BE PROPER; ERROR CHECK ON MULTIPLE EMAILS
/*
HANDLE:
registering a duplicate email; double res.send() problem...

*/
router.post('/register', (req, res) => { //account num , email  first_name , last_name ,   address , zip , phone preferences  state
    let account_num = uuid.v4();
    // remove 4 hyphens
    account_num = account_num.replace('-', ''); 
    account_num = account_num.replace('-', '');
    account_num = account_num.replace('-', '');
    account_num = account_num.replace('-', '');

    const email = req.body.email;
    const first = req.body.first;
    const last = req.body.last;
    const address = req.body.address;
    const zip = req.body.zip;
    const phone = req.body.phone;
    const pref = req.body.preferences;
    const state = req.body.state;
    const password = req.body.password;

    // First, create User
    con.query(`INSERT INTO Users VALUES (\"${account_num}\", \"${password}\")`, function(err){
        if (err) {
            if(err.code == 'ER_DUP_ENTRY' || err.errno == 1062){
            console.log(`Duplicate entry in uuid: ${account_num}`);
            res.send('Congratulations! You are the product of a crazy probability problem. Collision on UUID - please try again. - Thad');
            }
            else{
                console.log(err);
                res.sendStatus(500);
            }
            throw err;
        }
    });

    // Next, create corresponding customer
    con.query(`INSERT INTO Customers VALUES (\"${account_num}\", \"${email}\", \"${first}\", \"${last}\", \"${address}\", ${zip}, ${phone}, \"${pref}\", \"${state}\")`, function(err2){
        // duplicate Email
        if (err2) {
            console.log("found error");
            if(err2.code == 'ER_DUP_ENTRY' || err2.errno == 1062){
            console.log('Duplicate entry in email.');
            //res.send('This email is already registered.');
            }
            else{
                console.log(err2);
                //res.sendStatus(500);
            }
            throw err2;
        }
    });
    return res.redirect('/');
});

// log in endpoint
router.post('/login', (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){ 
        return res.send('Please input your email and password.');
    }

    else{
        con.query('SELECT * FROM Customers WHERE email = ?', [email], function(err, results){
            if (err) throw err;
            if(results.length == 1){
                const account_num = results[0].account_num;
                con.query(`SELECT * FROM Users WHERE account_num = \"${account_num}\"`, function(err2, results2){
                    if (err2) throw err2;
                    const checkPass = results2[0].password;
                    if(checkPass == password){
                        // set user's session information
                        req.session.isCustomer = true;
                        req.session.email = email;
                        req.session.account_num = account_num;
                        req.session.first = results[0].first_name;

                        return res.send(`Login successful! Welcome, ${req.session.first}!`);
                        //res.redirect('#'); // TODO: REDIRECT SOMEWHERE
                    }
                    else{
                        return res.send('Incorrect password.');
                    }
                });
            }
            else{
                return res.send('Incorrect email.');
            }
        });
    }
    
});

// update user information
// TODO: CHECK THIS ON ACTUAL SESSION... DON'T WANNA BOTHER LEARNING SESSIONS ON POSTMAN
router.post('/update', (req, res) => {
    if(req.session.account_num == undefined){
        return res.send('You must be logged in to do that!');
    }
    let first = req.body.first;
    let last = req.body.last;
    let address = req.body.address;
    let zip = req.body.zip;
    let phone = req.body.phone;
    let pref = req.body.preferences;
    let state = req.body.state;
    let account_num = req.session.account_num;
    let sql = `SELECT * FROM Customers WHERE account_num = \"${account_num}\"`;
    con.query(sql, function(err, results){
        if (err) throw err;
        
        // if null, change to what it was originally
        if(first == ''){
            first = results[0]['first_name'];
        }
        if(last == ''){
            last = results[0]['last_name'];
        }
        if(address == ''){
            address = results[0]['address'];
        }
        if(zip == ''){
            zip = results[0]['zip'];
        }
        if(phone == ''){
            phone = results[0]['phone'];
        }
        if(pref == ''){
            pref = results[0]['preferences'];
        }
        if(state == ''){
            state = results[0]['state'];
        }
        let sql2 = `UPDATE  Customers SET first_name = \"${first}\", last_name = \"${last}\", address = \"${address}\", zip = ${zip}, phone = ${phone}, preferences= \"${pref}\", state = \"${state}\" WHERE account_num = \"${account_num}\"`;
        con.query(sql2, function(err2){
            if (err2) throw err2;
            res.send('Updated information successfully.');
        });
    });
    
});

// fetches all current reservations of a user
router.get('/active-reservations', (req, res) =>{
    if(req.session.account_num == undefined){
        return res.send('You must be logged in to do that!');
    }
    const account_num = req.session.account_num; 
    var sql = `SELECT Reservations.*
     FROM hasReservations INNER JOIN Reservations ON hasReservations.reservation_num = Reservations.reservation_num AND hasReservations.account_num = \"${account_num}\" 
     AND Reservations.date >= CURDATE()`;

    con.query(sql, function(err, results){
        if (err) throw err;
        res.json(results);
    });
});

// fetches all current and past reservations of a user
router.get('/all-reservations', (req, res) => {
    if(req.session.account_num == undefined){
        return res.send('You must be logged in to do that!');
    }
    const account_num = req.session.account_num; 
    var sql = `SELECT Reservations.*
     FROM hasReservations INNER JOIN Reservations ON hasReservations.reservation_num = Reservations.reservation_num AND hasReservations.account_num = \"${account_num}\"`;

    con.query(sql, function(err, results){
        if (err) throw err;
        res.json(results);
    });
});

// log a user out, redirecting to login page
router.get('/logout', (req, res) =>{
    if(req.session.account_num == undefined){
        return res.send('You must be logged in to do that!');
    }
    req.session.destroy(function(err){
        if (err) throw err;
    });
    res.redirect('/login');
});

// get list of stops of the flight, given a flight_num, start_airport, and end_airport (found from reservations view)
router.post('/itinerary', (req, res) => {
    const flight_num = req.body.flight_num; 
    const start_airport = req.body.start_airport;
    const end_airport = req.body.end_airport;

    var sql = `SELECT airport_id, depart_time, arrive_time, stop_num FROM flightHasStops WHERE flight_num = ${flight_num} ORDER BY stop_num ASC`;
    con.query(sql, function(err, results){
        if (err) throw err;

        // get all stops between start and end airport
        let ret = {};
        let index = 0;
        let hitFirst = false;
        for(let i = 0; i < Object.keys(results).length; i++){
            if(results[i]['airport_id'] == start_airport){
                hitFirst = true;
            }
            // if hitFirst, add current entry to js object
            if(hitFirst){
                ret[index] = results[i];
                index++;
            }
            if(results[i]['airport_id'] == end_airport){
                break;
            }
        }
        res.json(ret);
    });
});
// TODO: PASSWORD RESET SEND LINK ON EMAIL
module.exports = router;