import axios from "axios";

const { VITE_TARGET, VITE_API } = import.meta.env;

class CardApi {
  static async getCardsByDeckId(id) {
    try {
      const { data } = await axios.get(`${VITE_TARGET}${VITE_API}/decks/${id}/cards`);

      return data;
    } catch (error) {
      console.log("Ошибка при получении карточек: ", error);
    }
  }
}

export default CardApi;
