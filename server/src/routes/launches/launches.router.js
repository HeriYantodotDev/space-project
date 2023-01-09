const express = require('express');

const {httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch } = require('./launches.controller');

//import the function/controller froun launches.controllers


const launchesRouter = express.Router();
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;