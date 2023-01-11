const {getAllLaunches, 
        addNewLaunch, 
        existsLaunchWithId, 
        abortLaunchById } = require('../../models/launches.model')

function httpGetAllLaunches(req,res) {
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req,res) {
    const launch = req.body;
    const [inputValidation, errorMessage] = isInputLaunchValid(launch);

    if (inputValidation) {
        addNewLaunch(launch);
        return res.status(201).json(launch);
    } else {
        res.status(400).json({
            error : errorMessage
        })
    }
}

function isInputLaunchValid (launch) {
    let inputValidation = true;
    let errorMessage = 'No Error';
    launch.launchDate = new Date(launch.launchDate);

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
       inputValidation = false
       errorMessage = "Missing Required Launch Property";
   } else if (isNaN(launch.launchDate)) {
       inputValidation = false
       errorMessage = "Invalid Launch Date";
   }

   return [inputValidation, errorMessage];
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