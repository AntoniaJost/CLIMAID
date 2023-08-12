#!/usr/bin/env node

const app = require('../app'); // Make sure the path to app.js is correct
const http = require('http');

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
