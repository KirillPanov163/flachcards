import { use, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import UserApi from "../entities/users/UserApi";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", passwordHash: "" });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_TARGET}${import.meta.env.VITE_API}/login`,
        form,
      );

      const user = response.data;
      UserApi.saveToLocal(user);
      alert("Успешный вход!");
      navigate("/");
    } catch (error) {
      console.log("Ошибка входа", error);
      alert("Несуществующий пользователь");
    }
  }

  return (
    <div className='flex-1 flex items-center justify-center px-4 py-10'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-200'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Вход в аккаунт
        </h1>

        <form onSubmit={handleSubmit} className='space-y-4' autoComplete="on">
          <input
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='email'
            placeholder='Email'
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            name="email"
            autoComplete="email"
          />
          <input
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='password'
            placeholder='Пароль'
            value={form.passwordHash}
            onChange={e => setForm({ ...form, passwordHash: e.target.value })}
            required
            name="password"
            autoComplete="password"
          />
          <button
            type='submit'
            className='
              w-full 
              bg-blue-600 
              text-white 
              py-2 
              rounded-lg 
              shadow-md 
              transition-all 
              duration-300 
              hover:bg-blue-700 
              hover:shadow-m
              active:scale-95
              cursor-pointer
            '
          >
            Войти
          </button>
        </form>

        <p className='text-center text-gray-600 mt-2'>
          Нет аккаунта?
        </p>

        <Link
          to='/register'
          className='
            block 
            w-full 
            text-center 
            mt-2
            bg-gray-200 
            text-gray-800 
            py-2 
            rounded-lg 
            shadow-sm 
            hover:bg-gray-300 
            hover:shadow-m
            active:scale-95
            transition-all 
            duration-300
            cursor-pointer
          '
        >
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
}