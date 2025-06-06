const { where } = require("sequelize");
const { Deck, Card, Session, User } = require("../db/models");

class SessionController {
  static async createSession(req, res) {
    try {
      const { userId, deckId, correctAnswers } = req.body;

      await Session.create({ userId, deckId, correctAnswers });

      return res.sendStatus(201);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getSession(req, res) {
    try {
      const { id } = req.params;

      const session = await Session.findOne({ where: { id } });

      return res.status(200).json(session);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async updateSession(req, res) {
    try {
      const { id } = req.params;
      
      const updateFields = req.body;
      await Session.update(updateFields, { where: { id } });

      return res.sendStatus(200);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getAllSessions(req, res) {
    try {
      const allSessions = await Session.findAll({
        include: [
          {
            model: Deck,
            attributes: ['name'], // только имя колоды
          },
          {
            model: User,
            attributes: ['name'], // только имя пользователя
          }
        ]
      });

      return res.status(200).json(allSessions);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  
}

module.exports = SessionController;
