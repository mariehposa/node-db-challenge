const express = require('express');
const db = require('./routerModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.getTask()
    .then (task => {
        res.status(200).json(task.map(pr => {
            return {
                ...pr,
                completed: pr.completed ? true : false
            }
        }))
    })
    .catch(err => {
        res.status(404).json({
            message: "Couldn't fetch tasks" + err.message
        })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    db.getTaskId(id)
    .then(task => {
        res.status(200).json({
            ...task,
            completed: task.completed === 1 ? true : false
        })
    })
    .catch(err => {
        res.status(404).json({
            message: "Couldn't fetch task" + err.message
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

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    db.removeTask(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find task with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to task resource' });
    });
});

module.exports = router;