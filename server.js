const dotenv = require('dotenv');

//IMPORT MONGOOSE IN ORDER TO CONNECT TO OUR DATABASE
const mongoose = require('mongoose');

// CONNECT TO OUR CONFIG.ENV FILE
dotenv.config({
    path: './config.env',
});

const app = require('./app');

//CREATE A VARIABLE THAT REPRESENTS OUR DATABASE
const DB = mongoose.connect(process.env.DATABASE.replace('<password>', process.env.PASSWORD), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log('DATABASE IS UP AND RUNNING...')
}).catch((error) => {
    console.log(error.message);
});

//CREATE A PORT TO LISTEN FOR REQUEST/RESPONSE CYCLE

const PORT = process.env.PORT

//LISTEN FOR REQUEST/RESPONSE
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});