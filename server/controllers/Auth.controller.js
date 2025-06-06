const { User } = require("../db/models");

class AuthController {
  static async register(req, res) {
    try {
      const { name, email, passwordHash } = req.body;

      // Создание нового пользователя
      const newUser = await User.create({ name, email, passwordHash });

      return res.status(201).json({ message: "Пользователь создан", userId: newUser.id });
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }
}

module.exports = AuthController;
