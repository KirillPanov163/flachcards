const express = require('express');
const serverConfig = require('./configs/serverConfig');

const app = express();
serverConfig(app);

module.exports = app;
