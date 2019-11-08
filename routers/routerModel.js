const db = require('../data/dbConfig');

function getResource () {
    return db('resource')
}

function getById(id) {
    return db('resource as r')
    .where('r.id', id)
}

function addResource(newResource) {
    return db('resource')
    .insert(newResource)
    .then(([id]) => this.getById(id))
}

function getProject () {
    return db('project')
}

function getTask () {
    return db('task')
}

module.exports = {
    getResource,
    getById,
    addResource,
    getProject,
    getTask,
}