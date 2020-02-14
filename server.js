const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { logger } = require('./middleware');
const projectsRouter = require('./routes/projectsRouter');
const actionsRouter = require('./routes/actionsRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.get('/', (req, res) => {
    res.status(200).send('Projects &amp; Actions API');
});

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;
