//IMPORT EXPRESS TO CREATE ROUTERS
const express = require('express');
const recordController = require('./../controllers/recordController');

//CREATE RECORD ROUTER
const recordRouter = express.Router();


// app.get('/', getIndex);
recordRouter
    .route('/')
    .get(recordController.getIndex)
    .post(recordController.createRecord)

recordRouter
    .route('/:id')
    .get(recordController.getRecord)
    .delete(recordController.deleteRecord)
    .put(recordController.updateRecord);

//EXPORT RECORD ROUTER
module.exports = recordRouter;