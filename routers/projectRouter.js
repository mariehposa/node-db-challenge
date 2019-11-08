const express = require('express');
const db = require('./routerModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.getProject()
    .then (project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(404).json({
            message: "Couldn't fetch" + err.message
        })
    })
})

module.exports = router;