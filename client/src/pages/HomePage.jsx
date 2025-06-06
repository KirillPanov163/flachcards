import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserApi from "../entities/users/UserApi";

function HomePage() {
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
    <div className='flex-1 flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8'>
          {user ? `Добро пожаловать, ${user.name}!` : "Загрузка..."}
        </h1>

        <Link
          to='/decks'
          className='
            inline-block
            px-8
            py-3
            text-white
            bg-blue-600
            rounded-lg
            shadow-md
            transition-all
            duration-300
            ease-in-out
            hover:bg-blue-700
            hover:shadow-xl
            hover:scale-105
            active:scale-95
          '
        >
          Начать
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
