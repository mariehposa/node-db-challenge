const db = require('../data/dbConfig');

function getResource () {
    return db('resource')
}

function getProject () {
    return db('project')
}

function getTask () {
    return db('task')
}

module.exports = {
    getResource,
    getProject,
    getTask,
}