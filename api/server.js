// build your server here and require it from index.js
const express = require('express');
const projectRouter = require('./project/router.js')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')
const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Projects Api is working add a route to see more' });
    console.log('api is working');
});

server.use('*', (req, res, next) => {
    next({status: 404, message: 'Bad Route try another'});
});

server.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;