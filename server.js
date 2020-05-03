// Define modules
const express = require('express');
const Bodyparser = require('body-parser');
const session = require('express-session');

const customers = require('./routes/api/customers');
const flights = require('./routes/api/flights');
const manager = require('./routes/api/manager');
const reservations = require('./routes/api/reservations');

const app = express();

// Add Bodyparser
app.use(Bodyparser.json()); // idk why tf express.json() built-in bodyparser won't work. Settling for this
app.use(Bodyparser.urlencoded({ extended: true}));

// use sessions
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// Routes configuration
app.use('/api/customers', customers);
app.use('/api/flights', flights);
app.use('/api/manager', manager);
app.use('/api/reservations', reservations);

// Port Definition
const port = process.env.PORT || 5000;

// Listening...
app.listen(port, () => console.log(`Server started on port ${port}`));
