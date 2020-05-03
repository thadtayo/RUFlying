const express = require('express');
const router = express.Router();
const con = require('../../db');
const uuid = require('uuid');

// get all flights
router.get('/', (req, res) => {
    if(req.session.account_num == undefined){
        return res.send('You must be logged in to do that!');
    }
    con.getConnection(function(error, connection){
        connection.query("SELECT * FROM Flights", function(err, results, fields){
            if(err) throw err;
            res.json(results);
        });
    });

});


// shows lists of flights given a start and end airport, as well as a preferred date
router.post('/show-flights', (req, res) =>{
    const start = req.body.start;
    const end = req.body.end;
    let date_inp = req.body.pref_date;
    let months = 
    {
        'Jan': '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12'
    }
    // remove day of week
    date_inp = date_inp.substring(4);
    // grab 3-letter month
    let month = date_inp.substring(0, 3);
    // convert to numerical value
    month = months[month];
    date_inp = date_inp.substring(4);
    // get numerical value of day
    let day = date_inp.substring(0, 2);
    date_inp = date_inp.substring(3);
    // get year
    let year = date_inp.substring(0, 4);
    // concat
    let date = year + '-' + month + '-' + day;
    
    const sql = `SELECT f1.flight_num, f1.airport_id AS start, f2.airport_id AS end, f1.depart_time, f2.arrive_time, f1.stop_num as start_stop, f2.stop_num as end_stop, f3.fares, f3.occupancy, f3.num_seats
    FROM flightHasStops f1, flightHasStops f2, Flights f3 WHERE f1.flight_num = f2.flight_num AND f1.flight_num = f3.flight_num AND f1.airline_id = f2.airline_id AND f1.airport_id <> f2.airport_id AND f1.airport_id = \"${start}\" AND f2.airport_id = \"${end}\"
    AND f1.depart_time < f2.arrive_time AND CONVERT(f1.depart_time, DATE) = \"${date}\" AND f3.occupancy < f3.num_seats`;
    con.getConnection(function(error, connection){
        connection.query(sql, function(err, results){
            if (err) throw err;
            var count = Object.keys(results).length;
            
            // if none available for selected date, search for flights from up to 7 days prior
            if(count == 0){
                console.log('Giving recommendations near');
                const sql2 = `SELECT f1.flight_num, f1.airport_id AS start, f2.airport_id AS end, f1.depart_time, f2.arrive_time, f1.stop_num as start_stop, f2.stop_num as end_stop, f3.fares
                FROM flightHasStops f1, flightHasStops f2, Flights f3 WHERE f1.flight_num = f2.flight_num AND f1.flight_num = f3.flight_num AND f1.airline_id = f2.airline_id AND f1.airport_id <> f2.airport_id AND f1.airport_id = \"${start}\" AND f2.airport_id = \"${end}\"
                AND f1.depart_time < f2.arrive_time AND CONVERT(f1.depart_time, DATE) >= DATE_SUB(\"${date}\", INTERVAL 7 DAY)`;
                connection.query(sql2, function(err2, results2){
                    var count2 = Object.keys(results2).length;
                    for(let i = 0; i < count2; i++){
                        let num_stops = results2[i]['end_stop'] - results2[i]['start_stop'];
                        results2[i]['total_fare'] = results2[i]['fares'] * num_stops;
                        results2[i]['num_stops'] = num_stops;
                    }
                    res.json(results2);
                });
            }
            else{
                for(let i = 0; i < count; i++){
                    let num_stops = results[i]['end_stop'] - results[i]['start_stop'];
                    results[i]['total_fare'] = results[i]['fares'] * num_stops;
                    results[i]['num_stops'] = num_stops;
                }
                res.json(results);
            }
        });
    });

});


// purchase flight, creating a reservation
router.post('/purchase-flight', (req, res) => {
    if(req.session.account_num == undefined){
        return res.send('You must be logged in to do that!');
    }
    const start = req.body.start;
    const end = req.body.end;
    const flight_num = req.body.flight_num;
    const total_fare = req.body.total_fare;
    const depart_time = req.body.depart_time;
    const arrive_time = req.body.arrive_time;
    const restrictions = req.body.restrictions;
    const num_stops = req.body.num_stops;
    const num_travelers = req.body.num_travelers;

    const account_num = req.session.account_num;

    // create reservation
    let reservation_num = uuid.v4();
    // remove 4 hyphens
    reservation_num = reservation_num.replace('-', ''); 
    reservation_num = reservation_num.replace('-', '');
    reservation_num = reservation_num.replace('-', '');
    reservation_num = reservation_num.replace('-', '');

    var sql = 'SELECT account_num FROM Employees ORDER BY RAND() LIMIT 1'; // select a random customer_rep
    con.getConnection(function(error, connection){
        connection.query(sql, function(err,results){
            if (err) throw err;
            const customer_rep = results[0]['account_num'];
    
            // check if domestic or international
            var sql4 = `SELECT country FROM Airports WHERE airport_id = \"${start}\"`;
    
            connection.query(sql4, function(err4, results4){
                if (err4) throw err4;
                let country1 = results4[0]['country'];
                var sql5 = `SELECT country FROM Airports WHERE airport_id = \"${end}\"`;
    
                connection.query(sql5, function(err5, results5){
                    if (err5) throw err5;
                    let country2 = results5[0]['country'];
                    let isDomestic = true;
                    if(country1 != country2){
                        isDomestic = false;
                    }
                    // with customer_rep selected, create reservation
                    var sql2 = `INSERT INTO Reservations (reservation_num, restrictions, start_airport, end_airport, depart_time, arrive_time, total_fare, customer_rep, flight_num, isDomestic, num_stops, num_travelers) 
                    VALUES (\"${reservation_num}\", \"${restrictions}\", \"${start}\", \"${end}\", \"${depart_time}\", \"${arrive_time}\", ${total_fare}, \"${customer_rep}\", ${flight_num}, ${isDomestic}, ${num_stops}, ${num_travelers})`;
                    connection.query(sql2, function(err2){
                        if (err2) throw err2;
                        // Reservation created. Now, create hasReservations
                        connection.query(`INSERT INTO hasReservations VALUES (\"${account_num}\", \"${reservation_num}\")`, function(err3){
                            if (err3) throw err3;
                            res.send('Purchase confirmed! You can view this reservation again by going into your Profile > Reservations.');
                            // lastly, update flight occupancy
                            connection.query(`UPDATE Flights SET occupancy = occupancy + ${num_travelers} WHERE flight_num = ${flight_num}`, function(errlast){
                                if(errlast) throw errlast;
                            });
                        });
                    });
                });
            });
        });
    });

});




module.exports = router;