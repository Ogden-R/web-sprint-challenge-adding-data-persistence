// build your `Task` model here
const db = require('../../data/dbConfig')

async function fetchAllTasks() {
    const rows = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
    return rows.map((item) => {
        return {
            ...item,
            task_completed: item.task_completed ? true : false,
        }
    })
}

async function findTaskById(id) {
    const row = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
        .where('task_id', id)
        .first()
    return { ...row, task_completed: row.task_completed ? true : false }
}

async function insert(task) {
    const [id] = await db('tasks').insert(task)
    return findTaskById(id)
}
module.exports = { fetchAllTasks, findTaskById, insert }