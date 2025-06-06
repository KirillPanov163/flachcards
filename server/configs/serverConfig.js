const express = require('express');
const morgan = require('morgan');
const indexRouter = require('../routes/index.router.js');

function serverConfig(app) {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use('/', indexRouter);

  app.get('/', (req, res) => {
    res.send('Все работает!')
  })
}

module.exports = serverConfig;
