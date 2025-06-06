"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Decks", [
      {
        name: "Эльбрус буткемп",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "География",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Фильмы и сериалы",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Жизнь студентов",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Decks", null, {});
  },
};
