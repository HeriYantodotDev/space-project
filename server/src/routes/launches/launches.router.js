const express = require('express');

const {getAllLaunches} = require('./launches.controller');

//import the function/controller froun launches.controllers


const launchesRouter = express.Router();
launchesRouter.get('/launches', getAllLaunches);

module.exports = launchesRouter;