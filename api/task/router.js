// build your `/api/tasks` router here
const router = require('express').Router()
const TaskModel = require('./model')
const { validateTask } = require('./task-middleware')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await TaskModel.fetchAllTasks()
        res.status(200).json(tasks)
    } catch (err) {
        next(err)
    }
})
router.post('/', validateTask, (req, res, next) => {
    const newTask = req.body
    TaskModel.insert(newTask)
        .then((task) => {
            res.status(201).json(task)
        })
        .catch(next)
})

module.exports = router