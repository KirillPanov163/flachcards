"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
      this.belongsTo(models.Deck, {
        foreignKey: "deckId",
      });
    }
  }
  Session.init(
    {
      userId: DataTypes.INTEGER,
      deckId: DataTypes.INTEGER,
      maxAttempts: DataTypes.INTEGER,
      remainingAttempts: DataTypes.INTEGER,
      status: DataTypes.STRING,
      correctAnswers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Session",
    },
  );
  return Session;
};
