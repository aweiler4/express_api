//IMPORT EXPRESS IN ORDER TO CREATE OUR EXPRESS APPLICATION
const express = require('express');

//IMPORT RECORD ROUTER
const recordRouter = require('./routes/recordRoutes')

//CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();

app.use(express.urlencoded({
    extended: false,
    })
);

app.use(express.json());
app.use(express.static('public'));

// SEND USER TO THE RECORD ROUTER
app.use('/records', recordRouter);

module.exports = app;