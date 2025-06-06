import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserApi from "../../entities/users/UserApi";

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await UserApi.getFromLocal();
        setUser(data);
      } catch (error) {
        console.error("Ошибка при получении пользователя:", error);
      }
    }

    fetchUser();
  }, []);

  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow-md">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Лого */}
    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
      <span role="img" aria-label="brain">🧠</span>
      FlashCards
    </h1>

    {/* Навигация */}
    <div className="flex-1 flex justify-center">
      <nav className="flex items-center space-x-8 text-xl font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-colors duration-200 hover:text-blue-400 ${
              isActive ? "text-blue-400 font-semibold" : ""
            }`
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/decks"
          className={({ isActive }) =>
            `transition-colors duration-200 hover:text-blue-400 ${
              isActive ? "text-blue-400 font-semibold" : ""
            }`
          }
        >
          Колоды
        </NavLink>
        <NavLink
          to="/sessions"
          className={({ isActive }) =>
            `transition-colors duration-200 hover:text-blue-400 ${
              isActive ? "text-blue-400 font-semibold" : ""
            }`
          }
        >
          Статистика
        </NavLink>
      </nav>
    </div>

    {/* Пользователь и выход */}
    <div className="flex items-center gap-4">
      {user && (

<div className="flex items-center gap-2 text-gray-300 text-lg sm:text-xl">
<span className="material-symbols-outlined text-2xl">person</span>
<span className="text-2xl">{user.name}</span>
</div>

      )}

      <button
        onClick={() => {
          UserApi.clearLocal();
          navigate("/login");
        }}
        className="
          bg-blue-600 
          text-white 
          px-7 
          py-2 
          rounded-lg 
          shadow-md 
          transition-all 
          duration-300 
          hover:bg-red-700 
          hover:shadow-xl 
          hover:scale-102
          active:scale-95
          cursor-pointer
          font-bold
        "
      >
        Выйти
      </button>
    </div>
  </div>
</header>
  );
}
