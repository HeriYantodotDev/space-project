const launches = new Map();

let lastFlightNumber = 100;

const launch = { 
    flightNumber: 100,
    mission: 'Yoda Exploration II',
    rocket : 'Lightsaber Blue I',
    launchDate : new Date('August 17, 2050') ,
    target : 'Kepler-442 b',
    customer : ['Jedi', 'Sith', 'Galactic Empire'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch);

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

module.exports = {
    getAllLaunches,
    addNewLaunch
}
