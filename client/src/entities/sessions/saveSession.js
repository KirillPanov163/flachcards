import UserApi from "../users/UserApi";
import SessionApi from "./SessionApi";

export async function saveSession({ deckId, correctAnswers }) {
  try {
    const user = await UserApi.getLastUser();

    const payload = {
      userId: user.id,
      deckId,
      correctAnswers,
    };

    await SessionApi.createSession(payload);
    console.log("Сессия успешно сохранена:", payload);
  } catch (error) {
    console.error("Ошибка при сохранении сессии:", error);
  }
}
