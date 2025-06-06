import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import UserApi from "../entities/users/UserApi";

function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", passwordHash: "" });
  const navigate = useNavigate(); // хук для навигации

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = await axios.post(
        `${import.meta.env.VITE_TARGET}${import.meta.env.VITE_API}/register`,
        form,
      );

      const userData = user.data;
      UserApi.saveToLocal(userData);

      alert("Пользователь зарегистрирован!");
      navigate("/"); // редирект на главную
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      alert("Ошибка регистрации");
    }
  };

  return (
    <div className='flex-1 flex items-center justify-center px-4 py-10'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-200'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Регистрация
        </h1>

        <form onSubmit={handleSubmit} className='space-y-4' autoComplete="on">
          <input
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='text'
            placeholder='Имя'
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            name="name"
            autoComplete="given-name"
          />
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
            autoComplete="new-password"
          />

          <button
            type='submit'
            className='
            mt-2
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
            Зарегистрироваться
          </button>
        </form>

        <p className='text-center text-gray-600 mt-2'>
          Уже есть аккаунт?
        </p>
        <Link
          to='/login'
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
          Войти
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
