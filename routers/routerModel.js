const db = require('../data/dbConfig');

function getResource () {
    return db('resource')
}

function getResourceId(id) {
    return db('resource as r')
    .where('r.id', id)
}

function addResource(newResource) {
    return db('resource')
    .insert(newResource)
    .then(([id]) => this.getResourceId(id))
}

function getProject () {
    return db('project')
}

function getProjectId (id) {
    return db('project as p')
    .where('p.id', id)
}

function addProject(newProject) {
    return db('project')
    .insert(newProject)
    .then(([id]) => this.getProjectId(id))
}

function getTask () {
    return db('task')
}

module.exports = {
    getResource,
    getById,
    addResource,
    getProject,
    addProject,
    getTask,

}