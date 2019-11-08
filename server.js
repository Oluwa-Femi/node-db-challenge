const express = require('express');

const server = express();

server.use(express.json());

const pRouter = require('./projects/projects-router.js');

server.use('/api/projects', pRouter);

server.get('/', (req, res) => {
    res.send(`
      <h2>LAMBDA W14 SPRINT CHALLENGE:)</h>
      <p>Let's do this!!! </p>
    `);
});

module.exports = server;