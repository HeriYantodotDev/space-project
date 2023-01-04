const express = require('express');

const {httpGetAllLaunches, httpAddNewLaunch } = require('./launches.controller');

//import the function/controller froun launches.controllers


const launchesRouter = express.Router();
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;