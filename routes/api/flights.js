const express = require('express');
const router = express.Router();
const con = require('../../db');


// get all flights
router.get('/', (req, res) => {
    con.query("SELECT * FROM Flights", function(err, results, fields){
        if(err) throw err;
        res.json(results);
    });
});

module.exports = router;