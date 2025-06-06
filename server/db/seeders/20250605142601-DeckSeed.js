"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Decks", [
      {
        name: "Как выжить на буткемпе",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elbrus inside",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ММ",
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
