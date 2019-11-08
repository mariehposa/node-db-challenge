const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./routers/projectRouter')
const resourceRouter = require('./routers/resourceRouter')
const taskRouter = require('./routers/taskRouter')

const server = express()
server.use(helmet());
server.use(express.json());



server.get('/', (req, res) => {
    res.send('Its working!')
})

module.exports = server;