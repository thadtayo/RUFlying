const express = require('express');
const router = express.Router();
const con = require('../../db');


// get all reservations
router.get('/', (req, res) => {
    con.query("SELECT * FROM Reservations", function(err, results, fields){
        if(err) throw err;
        res.json(results);
    });
});

// get all reservations for a customer
router.get('/customer_reservation', (req, res) => {
    const account_num = req.session.account_num;
    con.query(`SELECT * FROM Reservations JOIN HasReservations ON Reservations.reservation_num = HasReservations.reservation_num`, function(err, results, fields){
        if(err) throw err;
        res.json(results);
   });
});

// create reservation
router.post('/', (req, res) => { //reservation_num, restrictions, booking_fee, date, total_fare, customer_rep
    const reservation_num = req.body.reservation_num; //use uuid
    const restrictions = req.body.restrictions;
    const booking_fee = req.body.booking_fee;
    const date = req.body.date;
    const total_fare = req.body.total_fare;
    const customer_rep = req.body.customer_rep;

    con.query(`INSERT INTO Reservations VALUES (${reservation_num}, ${restrictions}, ${booking_fee}, ${date}, ${total_fare}, ${customer_rep})`, function(err, results, fields){
        if (err) throw err; 
        console.log('Inputted values into reservations successfully.');
    });
});
module.exports = router;

