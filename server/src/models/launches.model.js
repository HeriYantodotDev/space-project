const launches = new Map();

let lastFlightNumber = 100;

const launch = { 
    flightNumber: 100,
    mission: 'Yoda Exploration II',
    rocket : 'Lightsaber Blue I',
    launchDate : new Date('August 17, 2050') ,
    target : 'Kepler-442 b',
    customers : ['Jedi', 'Sith', 'Galactic Empire'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchid) {
    return launches.has(launchid);
}

function getAllLaunches () {
    return Array.from(launches.values());
}

function addNewLaunch (launch) {
    lastFlightNumber++;
    launches.set(
        lastFlightNumber, 
        Object.assign(launch, {
        flightNumber: lastFlightNumber,
        customer : ['Jedi', 'Sith', 'Galactic Empire'],
        upcoming: true,
        success: true
        }) 
        );
}

function abortLaunchById(launchID) {
    //we can delete the data, but it's better to set it as false
    const aborted = launches.get(launchID);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}
