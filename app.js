//IMPORT EXPRESS IN ORDER TO CREATE OUR EXPRESS APPLICATION
const express = require('express');

//IMPORT RECORD ROUTER
const recordRouter = require('./routes/recordRoutes')

//CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();

// SEND USER TO THE RECORD ROUTER
app.use('/records', recordRouter);

//CREATE A PORT TO LISTEN FOR REQUEST/RESPONSE CYCLE
const port = 3000;

//LISTEN FOR REQUEST/RESPONSE
app.listen(port, () => {
    console.log(`Server started on port`, port);
});