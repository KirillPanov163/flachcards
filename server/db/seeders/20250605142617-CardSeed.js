"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cards", [
      // Deck 1: Эльбрус буткемп
      {
        deckId: 1,
        question: "Какое слово говорит каждый второй студент на standup?",
        answer: "тяжело сложно устал",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 1,
        question: "Кем выпускаются студенты Elbrus Bootcamp?",
        answer: "актерами актёрами актер актёр",
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
        answer: "будет...интересно",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 1,
        question: "Любимая тема обсуждения Михаила Черничкина?",
        answer: "БМВ бмв BMW bmw",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Deck 2: География
      {
        deckId: 2,
        question: "Самая высокая гора в Европпе?",
        answer: "Эльбрус Elbrus elbrus эльбрус ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 2,
        question: "Страна с самой большой площадью?",
        answer: "РОССИЯ! россия рашка",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 2,
        question: "Какой вулкан самый активный в Европе?",
        answer: "Этна",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 2,
        question: "Какой город расположен на двух континентах?",
        answer: "Стамбул стамбул",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 2,
        question: "Фамилия лучшего картографа в мире?",
        answer: "Колчин колчин",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Фильмы
      {
        deckId: 3,
        question: "Какой фильм получил больше всего «Оскаров» за всю историю?",
        answer: "Титаник",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 3,
        question: "Какой режиссер снял «Криминальное чтиво»?",
        answer: "Тарантино",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 3,
        question: "Какой фильм стал самым кассовым в истории?",
        answer: "Аватар",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 3,
        question: "Лучшая линейка фильмов о гонках и тачках?",
        answer: "Форсаж",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 3,
        question: "Любимый сериал Даши?",
        answer: "Друзья",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Жизнь студентов
      {
        deckId: 4,
        question: "Что отправляют в чат студенты 2-ой фазы, если им всё понятно(да даже если не понятно)?",
        answer: "огурчики огурцы огурец",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 4,
        question: "Что пугает студентов 1-ой фазы?",
        answer: "Чекпоинты чекпоинт",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 4,
        question: "Что пугает студентов уже 3-ой фазы?",
        answer: "Ничего",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 4,
        question: "Любимая тема обсуждения Михаила Черничкина?",
        answer: "БМВ бмв BMW bmw",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckId: 4,
        question: "Чего не хватает всем студентам всех фаз(исключение: Вадим Вильгельм)?",
        answer: "Сна сна Сон сон",
        createdAt: new Date(),
        updatedAt: new Date(),
      },



    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
