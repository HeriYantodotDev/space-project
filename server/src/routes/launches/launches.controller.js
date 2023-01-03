const {getAlllaunches} = require('../../models/launches.model')

function httpGetAllLaunches(req,res) {
    return res.status(200).json(getAlllaunches())
}

module.exports = {
    httpGetAllLaunches
}