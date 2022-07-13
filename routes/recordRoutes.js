//IMPORT EXPRESS TO CREATE ROUTERS
const express = require('express');
const recordController = require('./../controllers/recordController')

//CREATE RECORD ROUTER
const recordRouter = express.Router();


// app.get('/', getIndex);
recordRouter.route('/').get(recordController.getIndex);

//EXPORT RECORD ROUTER
module.exports = recordRouter;