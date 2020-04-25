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
    const first = req.body.first;
    const last = req.body.last;
    const address = req.body.address;
    const zip = req.body.zip;
    const phone = req.body.phone;
    const pref = req.body.preferences;
    const state = req.body.state;

    con.query(`UPDATE  Customers SET first_name = \"${first}\", last_name = \"${last}\", address = \"${address}\", zip = ${zip}, phone = ${phone}, preferences= \"${preferences}\", state = \"${state}\"`, function(err){
        if (err) throw err;
        res.send('Updated information successfully.');
    });
});

// fetches all current reservations of a user
router.get('/active-reservations', (req, res) =>{
    const account_num = req.session.account_num; 
    var sql = `SELECT Reservations.reservation_num, Reservations.restrictions, Reservations.booking_fee, Reservations.date,
     Reservations.total_fare, Reservations.customer_rep FROM hasReservations INNER JOIN Reservations ON hasReservations.reservation_num = Reservations.reservation_num AND hasReservations.account_num = \"${account_num}\" 
     AND Reservations.date >= CURDATE()`;

    con.query(sql, function(err, results){
        if (err) throw err;
        res.json(results);
    });
});

// fetches all current and past reservations of a user
router.get('/all-reservations', (req, res) => {
    const account_num = req.session.account_num; 
    var sql = `SELECT Reservations.reservation_num, Reservations.restrictions, Reservations.booking_fee, Reservations.date,
     Reservations.total_fare, Reservations.customer_rep FROM hasReservations INNER JOIN Reservations ON hasReservations.reservation_num = Reservations.reservation_num AND hasReservations.account_num = \"${account_num}\"`;

    con.query(sql, function(err, results){
        if (err) throw err;
        res.json(results);
    });
});
// TODO: PASSWORD RESET SEND LINK ON EMAIL
module.exports = router;