const express = require('express');

const {httpGetAllLaunches} = require('./launches.controller');

//import the function/controller froun launches.controllers


const launchesRouter = express.Router();
launchesRouter.get('/launches', httpGetAllLaunches);

module.exports = launchesRouter;