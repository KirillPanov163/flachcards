import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserApi from "../../entities/users/UserApi";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await UserApi.getLastUser();
        setUser(data);
      } catch (error) {
        console.error("Ошибка при получении пользователя:", error);
      }
    }

    fetchUser();
  }, []);

  return (
    <header className='bg-gray-800 text-white px-6 py-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <h1 className='text-3xl font-bold tracking-tight flex items-center gap-2'>
          <span role='img' aria-label='brain'>
            🧠
          </span>{" "}
          FlashCards
        </h1>

        <nav className='flex items-center space-x-6 text-lg'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-blue-400 ${
                isActive ? "text-blue-400 font-semibold" : ""
              }`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to='/decks'
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-blue-400 ${
                isActive ? "text-blue-400 font-semibold" : ""
              }`
            }
          >
            Колоды
          </NavLink>
          <NavLink
            to='/sessions'
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-blue-400 ${
                isActive ? "text-blue-400 font-semibold" : ""
              }`
            }
          >
            Статистика
          </NavLink>

          {user && (
            <span className='ml-4 text-lg sm:text-xl text-gray-300 flex items-center gap-2'>
              👤 {user.name}
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}
