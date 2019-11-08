const db = require('../data/dbConfig');

function getResource () {
    return db('resource')
}

function getResourceId(id) {
    return db('resource as r')
    .where('r.id', id)
    .first()
}

function addResource(newResource) {
    return db('resource')
    .insert(newResource)
    .then(([id]) => this.getResourceId(id))
}

function removeResource(id) {
    return db('resource as r')
    .where('r.id', id)
    .del()
    .then(count => count > 0 ? count : null)
}

function getProject () {
    return db('project')
}

function getProjectId (id) {
    return db('project as p')
    .where('p.id', id)
    .first()
}

function addProject(newProject) {
    return db('project')
    .insert(newProject)
    .then(([id]) => this.getProjectId(id))
}

function removeProject(id) {
    return db('project as p')
    .where('p.id', id)
    .del()
    .then(count => count > 0 ? count : null)
}

function getTask () {
    return db('task')
}

function getTaskId (id) {
    return db('task as t')
    .where('t.id', id)
    .first()
}

function addTask (newTask) {
    return db('task')
    .insert(newTask)
    .then(([id]) => this.getTaskId(id))
}

function removeTask(id) {
    return db('task as t')
    .where('t.id', id)
    .del()
    .then(count => count > 0 ? count : null)
}

module.exports = {
    getResource,
    getResourceId,
    addResource,
    removeResource,
    getProject,
    getProjectId,
    addProject,
    removeProject,
    getTask,
    getTaskId,
    addTask,
    removeTask
}