const db = require('../data/dbConfig');

function getResource () {
    return db('resource')
}

function getProject () {
    return db('project')
}

module.exports = {
    getResource,
    getProject,
}