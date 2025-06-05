const express = require('express');
const router = express.Router();
const decksRouter = require('./deck.router.js');
const sessionsRouter = require('./session.router.js');

router.use('/decks', decksRouter);
router.use('/sessions', sessionsRouter);

module.exports = router;
