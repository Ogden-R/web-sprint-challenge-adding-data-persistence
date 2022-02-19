// build your `/api/resources` router here
const router = require('express').Router()
const { validateResource } = require('./middleware')
const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.fetchAllResources()
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', validateResource, async (req, res, next) => {
    try {
        const resource = await Resource.insert(req.body)
        res.status(201).json(resource)
    } catch (err) {
        next(err)
    }
})

module.exports = router;