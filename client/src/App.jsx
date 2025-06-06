// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./App/Layout/Layout";

// Страницы
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import DecksPage from "./pages/DecksPage";
import CardsPage from "./pages/CardsPage";
import SessionPage from "./pages/SessionPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔓 Страница регистрации — вне Layout */}
        <Route path='/register' element={<RegisterPage />} />

        {/* 🔓 Страница для входа — вне Layout */}
        <Route path='/login' element={<LoginPage />} />

        <Route path='/' element={<Layout />}>
          {/* Страница стартовая  */}
          <Route path='/' element={<HomePage />} />

          {/* Страница с выбором темы карточек */}
          <Route path='/decks' element={<DecksPage />} />

          {/* Страница с карточками */}
          <Route path='/decks/:id/cards' element={<CardsPage />} />

          {/* Сессии */}
          <Route path='/sessions' element={<SessionPage />} />
          {/* <Route path='/sessions/:id' element={<SessionPage />} /> */}

          {/* Страница 404 */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
