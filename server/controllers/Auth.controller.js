const { User } = require("../db/models");

class AuthController {
  static async register(req, res) {
    try {
      const { name, email, passwordHash } = req.body;

      // Создание нового пользователя
      const newUser = await User.create({ name, email, passwordHash });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }
  static async login(req, res) {
    try {
      const { email, passwordHash } = req.body;

      const user = await User.findOne({ where: { email, passwordHash } });

      if (!user) {
        return res.status(401).json({ message: "Нверный email или пароль" });
      }

      return res.json(user);
    } catch (error) {
      console.log("ошибка входа", error);
      return res.status(500).json(error);
    }
  }
}

module.exports = AuthController;
