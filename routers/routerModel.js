const db = require('../data/dbConfig');

function getResource () {
    return db('resource')
}