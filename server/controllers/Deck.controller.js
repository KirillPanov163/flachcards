const { where } = require("sequelize");
const { Deck, Card } = require("../db/models");

class DeckController {
  static async getAllDecks(req, res) {
    try {
      const allDecks = await Deck.findAll();

      return res.status(200).json(allDecks);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getAllCardsInDeck(req, res) {
    try {
      const { id } = req.params;

      const allCardsInDeck = await Card.findAll({ where: { deckId: id } });

      return res.status(200).json(allCardsInDeck)
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = DeckController;
