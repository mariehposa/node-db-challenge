const express = require('express');
const db = require('./routerModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.getResource()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(404).json({
            message: "Couldn't fetch" + err.message
        })
    })
})

module.exports = router;
