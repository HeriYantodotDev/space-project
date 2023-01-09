const {getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require('../../models/launches.model')


function httpGetAllLaunches(req,res) {
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req,res) {
    console.log('oke');
    const launch = req.body

    console.log(launch);

    //if empty or there's no such data
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error : "Missing Required Launch Property"
        })
    }

    launch.launchDate = new Date(launch.launchDate);
    //validate whether it's a number or not. Is this a good idea?
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error : "Invalid Launch Date"
        })
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req,res) {
    const launchID = Number(req.params.id); 

    if ( !existsLaunchWithId(launchID)) {
        return res.status(404).json({
            error : 'Launch number not found'
        });
    }

    const aborted = abortLaunchById(launchID);
    return res.status(200).json(aborted);

}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}