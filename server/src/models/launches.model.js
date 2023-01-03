const launches = new Map();

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

module.exports = {
    launches
}
