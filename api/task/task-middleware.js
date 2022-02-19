const validateTask = (req, res, next) => {
    const { task_description } = req.body
    if (
        task_description === undefined ||
        task_description === '' ||
        typeof task_description !== 'string' ||
        !task_description.trim()
    ) {
        res.status(400).json({ message: 'invalid task_description' })
    } else {
        next()
    }
}

module.exports = {
    validateTask,
}
