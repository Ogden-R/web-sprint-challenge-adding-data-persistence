// build your `Resource` model here
const db = require('../../data/dbConfig')

async function fetchAllResources() {
    return db('resources')
}

function findById(id) {
    return db('resources').where('resource_id', id).first()
}

async function insert(resource) {
    const [id] = await db('resources').insert(resource)
    return findById(id)
}

module.exports = { fetchAllResources, insert }