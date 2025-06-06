const express = require('express');
const serverConfig = require('./configs/serverConfig');
const cors = require('cors');

const app = express();
app.use(cors());
serverConfig(app);


module.exports = app;
