const express = require("express");
const router = express.Router();

const DeckController = require("../controllers/Deck.controller.js");

router.get("/", DeckController.getAllDecks);
router.get("/:id/cards", DeckController.getAllCardsInDeck);


module.exports = router;
