import axios from "axios";

const { VITE_TARGET, VITE_API } = import.meta.env;

class UserApi {
  static async getLastUser() {
    const response = await axios.get(`${VITE_TARGET}${VITE_API}/users/last`);
    return response.data;
  }

  static async getUserById(id) {
    const response = await axios.get(`${VITE_TARGET}${VITE_API}/users/${id}`);
    return response.data;
  }

  static async saveUser(id) {
    const response = await axios.get(`${VITE_TARGET}${VITE_API}/users/${id}`);
    return response.data;
  }

  static saveToLocal(user) {
    localStorage.setItem("flashcards-user", JSON.stringify(user));
  }

  static getFromLocal() {
    const user = localStorage.getItem("flashcards-user");
    return user ? JSON.parse(user) : null;
  }

  static clearLocal() {
    localStorage.removeItem("flashcards-user");
  }
}

export default UserApi;
