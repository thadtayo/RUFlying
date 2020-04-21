const express = require('express');
const router = express.Router();
const con = require('../../db');


// get all customers
router.get('/', (req, res) => {
    con.query("SELECT * FROM Customers", function(err, results, fields){
        if(err) throw err;
        res.json(results);
    });
});

// register customer
router.post('/', (req, res) => { //account num , email  first_name , last_name ,   address , zip , phone preferences  state
    const account_num = 3; // change to sql id
    const email = req.body.email;
    const first = req.body.first;
    const last = req.body.last;
    const address = req.body.address;
    const zip = req.body.zip;
    const phone = req.body.phone;
    const pref = req.body.preferences;
    const state = req.body.state;
    console.log(req.body);

    // con.query(`INSERT INTO Customers VALUES (${account_num}, ${email}, ${first}, ${last}, ${address}, ${zip}, ${phone}, ${pref}, ${state})`, function(err, results, fields){
    //     if (err) throw err; 
    //     console.log('Inputted values into Customers successfully.');
    // });
});
module.exports = router;