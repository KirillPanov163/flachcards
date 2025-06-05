"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      this.hasMany(models.Card, {
        foreignKey: "deckId",
      });
    }
  }
  Deck.init(
    {
      name: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Deck",
    },
  );
  return Deck;
};
