const express = require('express');
const db = require('./routerModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.getTask()
    .then (task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(404).json({
            message: "Couldn't fetch tasks" + err.message
        })
    })
})

router.post('/', (req, res) => {
    const newData = req.body;

    db.addTask(newData)
    .then(newTask => {
        res.status(201).json(newTask)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new task' + err.message });
    });
})

module.exports = router;