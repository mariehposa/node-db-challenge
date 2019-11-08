const express = require('express');
const db = require('./routerModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.getProject()
    .then (project => {
        res.status(200).json(project.map(pr => {
            return {
                ...pr,
                completed: pr.completed ? true : false
            }
        }))
    })
    .catch(err => {
        res.status(404).json({
            message: "Couldn't fetch projects" + err.message
        })
    })
})

router.post('/', (req, res) => {
    const newData = req.body;

    db.addProject(newData)
    .then(newProject => {
        res.status(201).json(newProject)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new resource' + err.message });
    });
})

module.exports = router;