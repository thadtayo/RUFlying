// Define modules
const express = require('express');
const customers = require('./routes/api/customers');
const flights = require('./routes/api/flights');

const app = express();

// Add Bodyparser
app.use(express.json());

// Routes configuration
app.use('/api/customers', customers);
app.use('/api/flights', flights);

// Port Definition
const port = process.env.PORT || 5000;

// Listening...
app.listen(port, () => console.log(`Server started on port ${port}`));
