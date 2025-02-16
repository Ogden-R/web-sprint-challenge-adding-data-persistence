const validateResource = (req, res, next) => {
    const { resource_name } = req.body
    if (
        resource_name === undefined ||
        typeof resource_name !== 'string' ||
        !resource_name.trim() ||
        resource_name === ''
    ) {
        next({
            status: 400,
            message: 'invalid resource_name'
        })
    } else {
        next()
    }
}

module.exports = {
    validateResource,
}