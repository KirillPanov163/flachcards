import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SessionApi from "../entities/sessions/SessionApi";
import UserApi from "../entities/users/UserApi";

function SessionPage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function loadSessions() {
      try {
        const currentUser = await UserApi.getLastUser();

        const allSessions = await SessionApi.getAllSessions();
        const filteredSessions = allSessions.filter(session => session.userId === currentUser.id);
        setSessions(filteredSessions);
      } catch (error) {
        console.log("Ошибка при получении сессий: ", error);
      }
    }

    loadSessions();
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          История сессий
        </h1>

        {sessions.length === 0 ? (
          <p className="text-center text-gray-500">Нет завершённых сессий.</p>
        ) : (
          sessions.map(session => (
            <div
              key={session.id}
              className="
                mb-6 
                p-5 
                bg-white 
                rounded-xl 
                shadow-md 
                border 
                border-gray-200 
                transition-all 
                duration-300 
                hover:shadow-xl 
                hover:-translate-y-1
              "
            >
              <p className="mb-2 text-gray-700">
                <strong className="text-gray-800">Пользователь:</strong> {session.User.name}
              </p>
              <p className="mb-2 text-gray-700">
                <strong className="text-gray-800">Колода:</strong> {session.Deck.name}
              </p>
              <p className="mb-2 text-gray-700">
                <strong className="text-gray-800">Правильных ответов:</strong> {session.correctAnswers}
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-800">Дата:</strong> {new Date(session.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SessionPage;
