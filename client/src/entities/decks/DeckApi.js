import axios from "axios";

const { VITE_TARGET, VITE_API } = import.meta.env;

class DeckApi {
  static async getAllDecks() {
    try {
      const { data } = await axios.get(`${VITE_TARGET}${VITE_API}/decks`);

      return data;
    } catch (error) {
      console.log("Ошибка при получении колод: ", error);
      // throw error;
    }
  }
}

export default DeckApi;
