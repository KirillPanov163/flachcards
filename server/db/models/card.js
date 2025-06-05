"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.Deck, {
        foreignKey: "deckId",
      });
    }
  }
  Card.init(
    {
      deckId: DataTypes.INTEGER,
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Card",
    },
  );
  return Card;
};
