const express = require('express');
const router = express.Router();
const con = require('../../db');
const uuid = require('uuid');

// get all flights
router.get('/', (req, res) => {
    con.query("SELECT * FROM Flights", function(err, results, fields){
        if(err) throw err;
        res.json(results);
    });
});


// shows lists of flights given a start and end airport
router.post('/show-flights', (req, res) =>{
    const start = req.body.start;
    const end = req.body.end;
    const sql = `SELECT  f1.flight_num, f1.airport_id AS start, f2.airport_id AS end, f1.depart_time, f2.arrive_time, f1.stop_num as start_stop, f2.stop_num as end_stop, f3.fares
    FROM flightHasStops f1, flightHasStops f2, Flights f3 WHERE f1.flight_num = f2.flight_num AND f1.airline_id = f2.airline_id AND f1.airport_id <> f2.airport_id AND f1.airport_id = \"${start}\" AND f2.airport_id = \"${end}\"
    AND f1.depart_time < f2.arrive_time`;
    con.query(sql, function(err, results){
        if (err) throw err;
        var count = Object.keys(results).length;
        for(let i = 0; i < count; i++){
            let num_stops = results[i]['end_stop'] - results[i]['start_stop'];
            results[i]['total_fare'] = results[i]['fares'] * num_stops;
        }
        res.json(results);
    });
});

// purchase flight, creating a reservation
router.post('/purchase-flight', (req, res) => {
    const start = req.body.start;
    const end = req.body.end;
    const flight_num = req.body.flight_num;
    const total_fare = req.body.total_fare;
    const depart_time = req.body.depart_time;
    const arrive_time = req.body.arrive_time;
    const restrictions = req.body.restrictions;
    const account_num = '626a6aee7b3c4f9a8503642ef19c458f'; // USE REQ.SESSION.ACCOUNT_NUM
    // create reservation
    let reservation_num = uuid.v4();
    // remove 4 hyphens
    reservation_num = reservation_num.replace('-', ''); 
    reservation_num = reservation_num.replace('-', '');
    reservation_num = reservation_num.replace('-', '');
    reservation_num = reservation_num.replace('-', '');

    var sql = 'SELECT account_num FROM Employees ORDER BY RAND() LIMIT 1'; // select a random customer_rep
    con.query(sql, function(err,results){
        if (err) throw err;
        const customer_rep = results[0]['account_num'];

        // check if domestic or international
        var sql4 = `SELECT country FROM Airports WHERE airport_id = \"${start}\"`;
        con.query(sql4, function(err4, results4){
            if (err4) throw err4;
            let country1 = results4[0]['country'];
            var sql5 = `SELECT country FROM Airports WHERE airport_id = \"${end}\"`;

            con.query(sql5, function(err5, results5){
                if (err5) throw err5;
                let country2 = results5[0]['country'];
                let isDomestic = true;
                if(country1 != country2){
                    isDomestic = false;
                }
                // with customer_rep selected, create reservation
                var sql2 = `INSERT INTO Reservations (reservation_num, restrictions, start_airport, end_airport, depart_time, arrive_time, total_fare, customer_rep, flight_num, isDomestic) 
                VALUES (\"${reservation_num}\", \"${restrictions}\", \"${start}\", \"${end}\", \"${depart_time}\", \"${arrive_time}\", ${total_fare}, \"${customer_rep}\", ${flight_num}, ${isDomestic})`;
                con.query(sql2, function(err2){
                    if (err2) throw err2;
                    // Reservation created. Now, create hasReservations
                    con.query(`INSERT INTO hasReservations VALUES (\"${account_num}\", \"${reservation_num}\")`, function(err3){
                        if (err3) throw err3;
                        res.send('Purchase confirmed! You can view this reservation again by going into your Profile > Reservations.');
                    });
                });
            });
        });
    });
});




module.exports = router;