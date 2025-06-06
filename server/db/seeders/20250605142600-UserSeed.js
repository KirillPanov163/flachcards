"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "asd@mail.com",
          name: "Alexandr",
          passwordHash: "asweqr213",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "rytew@mail.com",
          name: "Nikolay",
          passwordHash: "654gse4!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
