//IMPORT EXPRESS TO CREATE ROUTERS
const express = require('express');

//CREATE RECORD ROUTER
const recordRouter = express.Router();

const getIndex = (request, response) => {
    response.send('Index Homepage');
}

// app.get('/', getIndex);
recordRouter.route('/').get(getIndex);

//EXPORT RECORD ROUTER
module.exports = recordRouter;