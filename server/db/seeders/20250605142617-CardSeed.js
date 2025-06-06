"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cards", [
      // Deck 1: Как выжить на буткемпе
      {
        deckId: 1,
        question: "Какое слово говорит каждый второй студент на standup?",
        answer: "тяжело сложно устал",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 1,
        question: "Что пьёт каждый второй, думая, что это поможет?",
        answer: "кофе",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 1,
        question: "Что остаётся в голове после 12 часов учебы?",
        answer: "ничего пустота",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 1,
        question: "Что снится каждому студенту ночью?",
        answer: "код VS Code JS Promise промисы",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 1,
        question: "Что говорит преподаватель перед самым сложным блоком?",
        answer: "просто легко",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 1,
        question: "Что делать, если ты не знаешь как решить задание?",
        answer: "HELP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Deck 2: Elbrus inside
      {
        deckId: 2,
        question: "Где ты понимаешь, что работать 12 часов в день — это разминка?",
        answer: "elbrus bootcamp эльбрус буткемп",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 2,
        question: "Какой цвет ассоциируется с успехом?",
        answer: "зелёный",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 2,
        question: "Где внезапно выясняется, что ты теперь женат на JavaScript?",
        answer: "elbrus bootcamp эльбрус буткемп",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 2,
        question: "Как называется метод, которым можно решить любую задачу?",
        answer: "HELP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 2,
        question: "Что у всех студентов Elbrus в дефиците, кроме багов?",
        answer: "сон",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
