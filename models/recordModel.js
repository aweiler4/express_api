//IMPORT MONGOOSE IN ORDER TO CREATE A MODEL
const mongoose = require('mongoose');

//BEFORE YOU CAN CREATE YOUR MODEL YOU NEED TO CREATE A SCHEMA
const recordSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    complete: {
        type: Boolean,
    }
});

//USE SCHEMA TO CREATE A MODEL

const Records = mongoose.model('Record', recordSchema);

//EXPORT MODEL TO CONTROLLER FILE
module.exports = Records;