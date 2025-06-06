const express = require("express");
const router = express.Router();

const SessionController = require("../controllers/Session.controller.js");

router.post("/", SessionController.createSession);
router.get("/", SessionController.getAllSessions);

router.get("/:id", SessionController.getSession);
router.patch("/:id", SessionController.updateSession);

module.exports = router;
