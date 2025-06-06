import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", passwordHash: "" });
  const navigate = useNavigate(); // хук для навигации

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_TARGET}${import.meta.env.VITE_API}/register`, form);
      alert("Пользователь зарегистрирован!");

      navigate("/"); // редирект на главную
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      alert("Ошибка регистрации");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='p-4 max-w-md mx-auto'>
      <h1 className='text-2xl mb-4'>Регистрация</h1>

      <input
        className='border p-2 mb-2 w-full'
        placeholder='Имя'
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        className='border p-2 mb-2 w-full'
        placeholder='Email'
        type='email'
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <input
        className='border p-2 mb-4 w-full'
        placeholder='Пароль'
        type='password'
        value={form.passwordHash}
        onChange={e => setForm({ ...form, passwordHash: e.target.value })}
      />

      <button className='bg-blue-500 text-white py-2 px-4 rounded'>Зарегистрироваться</button>
    </form>
  );
}

export default RegisterPage;
