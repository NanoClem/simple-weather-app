// LIBS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

// ENV
require('dotenv').config();
const PORT = process.env.PORT;
const apiRoutes = require('./routes');

// JSON PARSER
app.use(bodyParser.urlencoded ( {extended : true} ));
app.use(bodyParser.json())

// Api routes
app.use(apiRoutes);

// Start express server
app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}`));

// Connect to mongod
//...