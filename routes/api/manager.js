const express = require('express');
const router = express.Router();
const con = require('../../db');

router.get('/', (req, res) => {
    if(req.session.isCustomer == false) {
        res.send('You have successfully logged in!')
    } else {
        res.send('You are not authorized to be here!');
    }
});

router.get('/create_customer', (req, res) => {
    if(req.session.isCustomer == false) {
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
        con.query(`INSERT INTO Customers VALUES (\"${account_num}\", \"${email}\", \"${first}\", \"${last}\", \"${address}\", \"${zip}\", \"${phone}\", \"${pref}\", \"${state}\")`, function(err2){
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
    } else {
        res.send('You\'re not allowed to do that!');
    }
});



// edit the customer's information
router.post('/edit_customer', (req, res) => {

    if(req.session.isCustomer == false) {

    const account_num = req.session.isCustomer;
    const email = req.body.email;
    const first = req.body.first;
    const last = req.body.last;
    const address = req.body.address;
    const zip = req.body.zip;
    const phone = req.body.phone;
    const pref = req.body.preferences;
    const state = req.body.state;

    con.query(`UPDATE Customers SET email=$\"{email}\", first=\"${first}\", last=\"${last}\", address=\"${address}\", zip=\"${zip}\", phone=\"${phone}\", pref=\"${pref}\", state=\"${state}\" WHERE account_num=\"${account_num}\";`, function(err, results, fields) {
        if (err) throw err;
        res.send('Updated Customer info.');
    });

    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// get all reservations
router.get('/all_reservations', (req, res) => {
    if(req.session.isCustomer == false) {
        con.query("SELECT * FROM Reservations", function(err, results, fields){
            if(err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// get all flights
router.get('/all_flights', (req, res) => {
    if(true) {
        con.query("SELECT * FROM Flights", function(err, results, fields){
            if(err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// get all reservations by flight number
router.get('/res_by_flight', (req, res) => {

    if(req.session.isCustomer == false) {
        const flight_num = req.body.flight_num;

        con.query(`SELECT * FROM Reservations WHERE flight_num=\"${flight_num}\";`, function(err, results, fields){
            if(err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// get all reservations by customer name
router.get('/res_by_name', (req, res) => {

    if(req.session.isCustomer == false) {
        const first = req.body.first;
        const last = req.body.last;

        con.query(`SELECT Customers.first_name, Customers.last_name, Reservations.* FROM (Customers INNER JOIN HasReservations USING(account_num)) INNER JOIN Reservations USING(reservation_num) WHERE first_name=\"${first}\" AND last_name=\"${last}\";`, function(err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// obtain sales report for a particular month
router.get('/sales_report', (req, res) => {
    
    if(req.session.isCustomer == false) {
        let month_name = "" + req.body.month_name + "";

        var month;

        switch(month_name) {
            case 'January' : month = '01';
                            break;
            case 'February' : month = '02';
                            break;
            case 'March' : month = '03';
                            break;
            case 'April' : month = '04';
                            break;
            case 'May' : month = '05';
                            break;
            case 'June' : month = '06';
                            break;
            case 'July' : month = '07';
                            break;
            case 'August' : month = '08';
                            break;
            case 'September' : month = '09';
                            break;
            case 'October' : month = '10';
                            break;
            case 'November' : month = '11';
                            break;
            case 'December' : month = '12';
                            break;
        }

        con.query(`SELECT SUM(total_fare) AS May FROM Reservations WHERE CONVERT(depart_time, CHAR) LIKE '%${month}%';`, function (err, results, fields) {
            if (err) throw err;
            res.json(results);    
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// Produce a summary listing of revenue generated by a particular flight
router.get('/flight_summary', (req, res) => {

    if(req.session.isCustomer == false) {
        const flight_num = req.body.flight_num;

        con.query(`SELECT flight_num, total_fare, SUM(Reservations.total_fare) AS total_revenue FROM Reservations WHERE flight_num=\"${flight_num}\";`, function(err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// Produce a summary listing of revenue generated by a destination city
router.get('/city_summary', (req, res) => {

    if(req.session.isCustomer == false) {
        const city = req.body.city;
        
        con.query(`SELECT Airports.city AS city_name, SUM(Reservations.total_fare) AS total_revenue FROM Reservations INNER JOIN Airports ON Reservations.end_airport=Airports.airport_id AND Airports.city=\"${city}\";`, function(err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }

});

// Produce a summary listing of revenue generated by a customer
router.get('/customer_summary', (req, res) => {

    if(req.session.isCustomer == false) {
        const email = req.body.email;

        con.query(`SELECT Customers.account_num, Customers.first_name, Customers.last_name, Customers.email, SUM(Reservations.total_fare) AS total_revenue FROM Customers INNER JOIN (HasReservations INNER JOIN Reservations USING (reservation_num)) USING (account_num) WHERE email=\"${email}\";`, function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// Determine which customer generated most total revenue
// have to fix this because total_revenue comes up as the total revenue for all reservations not for individual customer
router.get('/customer_max_rev', (req, res) => {

    if(req.session.isCustomer == false) {
        con.query(`SELECT first_name, MAX(total_revenue) FROM (SELECT Customers.first_name, SUM(Reservations.total_fare) AS total_revenue FROM Customers INNER JOIN (HasReservations INNER JOIN Reservations USING (reservation_num)) USING (account_num) GROUP BY Customers.account_num) AS tbl;`, function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// Produce a list of most active flights
// My interpretation is that the flights with the most reservations are the most active flights
router.get('/active_flights', (req, res) => {

    if(req.session.isCustomer == false) {

        con.query(`SELECT flight_num, COUNT(flight_num) AS num_reservations FROM Reservations GROUP BY flight_num ORDER BY num_reservations DESC LIMIT 5;`, function(err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// Produce a list of all customers who have seats reserved on a given flight
router.get('/customer_seats', (req, res) => {

    if(req.session.isCustomer == false) {
        const flight_num = req.body.flight_num;

        con.query(`SELECT Reservations.flight_num, Customers.account_num, Customers.first_name, Customers.last_name, Customers.email FROM (Reservations INNER JOIN HasReservations USING (reservation_num)) INNER JOIN Customers USING (account_num) WHERE flight_num=\"${flight_num}\";`, function(err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// Produce a list of all flights for a given airport
// for the flighthasstops table you can't have multiple flights with the same airport_id
router.get('/airport_flights', (req, res) => {

    if(req.session.isCustomer == false) {
        const airport_id = req.body.airport_id;

        con.query(`SELECT Airports.name, Flights.* FROM (Flights INNER JOIN FlightHasStops USING(flight_num)) INNER JOIN Airports USING(airport_id) WHERE airport_id=\"${airport_id}\";`, function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.send('You\'re not allowed to do that!');
    }
});

// Produce a list of all flights whose arrival and departure times are on-time
router.get('/on_time', (req, res) => {

    if(req.session.isCustomer == false) {
        
        con.query(`SELECT * FROM Flights WHERE on_schedule='req.session.isCustomer == false';`, function (err, results, fields) {
            if(err) throw err;
            res.json(results);
        });

    } else {
        res.send('You\'re not allowed to do that!');
    }

});

// Produce a list of all flights whose arrival and departure times are delayed
router.get('/delayed', (req, res) => {

    if(req.session.isCustomer == false) {

        con.query(`SELECT * FROM Flights WHERE on_schedule='False';`, function (err, results, fields) {
            if(err) throw err;
            res.json(results);
        });

    } else {
        res.send('You\'re not allowed to do that!');
    }

});

module.exports = router;