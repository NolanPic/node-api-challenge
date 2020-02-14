const express = require('express');
const { logger } = require('./middleware');

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
    res.status(200).send('Projects &amp; Actions API');
});

module.exports = server;
