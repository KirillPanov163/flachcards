const express = require('express');
const router = express.Router();
const decksRouter = require('./deck.router.js');
const sessionsRouter = require('./session.router.js');
const AuthController = require('../controllers/Auth.controller.js')
const UserController = require('../controllers/User.controllers.js');

// Аутентификация
router.post('/login', AuthController.login)
router.post("/register", AuthController.register);

// Пользователи
router.get("/users/last", UserController.getLastUser);
router.get("/users/:id", UserController.getUserById);

router.use('/decks', decksRouter);
router.use('/sessions', sessionsRouter);

module.exports = router;
