const express = require('express');
const db = require('./routerModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.getResource()
    .then(resource => {
        res.status(200).json(resource.map(pr => {
            return {
                ...pr,
                completed: pr.completed ? true : false
            }
        }))
    })
    .catch(err => {
        res.status(404).json({
            message: "Couldn't fetch resources" + err.message
        })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params.id

    db.getResourceId(id)
    .then(resource => {
        res.status(200).json({
            ...resource,
            completed: resource.completed === 1 ? true : false
        })
    })
    .catch(err => {
        res.status(404).json({
            message: "Couldn't fetch resource" + err.message
        })
    })
})

router.post('/', (req, res) => {
    const resourceData = req.body;

    db.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new resource' + err.message });
    });
})

module.exports = router;
