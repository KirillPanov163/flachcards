// server/controllers/UserController.js
const { User } = require("../db/models");

class UserController {
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        attributes: ["name"],
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getLastUser(req, res) {
    try {
      const user = await User.findOne({
        order: [["createdAt", "DESC"]],  // чтобы достать последнего пользователя
        attributes: ["id", "name", "email"],
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Ошибка сервера", error });
    }
  }
}

module.exports = UserController;
