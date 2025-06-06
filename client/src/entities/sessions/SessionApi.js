import axios from "axios";

const { VITE_TARGET, VITE_API } = import.meta.env;

class SessionApi {
  static async getAllSessions() {
    try {
      const { data } = await axios.get(`${VITE_TARGET}${VITE_API}/sessions`);

      return data;
    } catch (error) {
      console.log("Ошибка при получении колод: ", error);
    }
  }

  static async createSession(payload) {
    return axios.post(`${VITE_TARGET}${VITE_API}/sessions`, payload);
  }
}

export default SessionApi;
