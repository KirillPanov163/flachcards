import { useEffect, useState } from "react";
import CardApi from "../entities/cards/CardApi";
import UserApi from "../entities/users/UserApi";
import { useNavigate, useParams } from "react-router-dom";
import { saveSession } from "../entities/sessions/saveSession";

function CardsPage() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCards() {
      try {
        const data = await CardApi.getCardsByDeckId(id);
        setCards(data);
      } catch (error) {
        console.log("Ошибка при получении колод: ", error);
      }
    }

    loadCards();
  }, [id]);

  function handleCheckAnswer() {
    const correctAnswers = cards[currentIndex].answer.trim().toLowerCase();
    const user = userAnswer.trim().toLowerCase();

    if (!user) {
      setIsCorrect(false);
      setShowAnswer(true);
      return;
    }

    const isRight = correctAnswers.includes(user);

    setIsCorrect(isRight);
    setShowAnswer(true);

    if (isRight) {
      setCorrectCount(prev => prev + 1);
    }
  }

  async function handleNext() {
    const isLast = currentIndex === cards.length - 1;

    if (isLast) {
      const user = UserApi.getFromLocal();

      if (!user) {
        console.log("Пользователь не найден");
      }

      await saveSession({
        userId: user.id,
        deckId: Number(id),
        correctAnswers: correctCount,
      });

      navigate("/sessions");
      return;
    }

    setShowAnswer(false);
    setUserAnswer("");
    setIsCorrect(null);
    setCurrentIndex(prev => prev + 1);
  }

  const currentCard = cards[currentIndex];

  if (!currentCard) {
    return;
  }

  return (
    <div className='flex-1 flex items-center justify-center'>
      <div
        className='
        max-w-md 
        w-full 
        h-[380px] 
        bg-white 
        rounded-xl 
        p-6 
        shadow-lg 
        text-center 
        flex 
        flex-col 
        justify-center 
        overflow-hidden
      '
      >
        <h2 className='text-lg font-bold mb-4'>
          Вопрос {currentIndex + 1} из {cards.length}
        </h2>

        <p className='text-xl mb-6'>{currentCard.question}</p>

        {!showAnswer && (
          <>
            <div className='mb-4'>
              <input
                type='text'
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
                placeholder='Ваш ответ'
                className='
                  border 
                  border-gray-300 
                  px-4 
                  py-2 
                  rounded-lg 
                  shadow-sm 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-blue-400 
                  transition-all 
                  duration-300 
                  max-w-sm 
                  w-full 
                  mx-auto 
                  block
                '
              />
            </div>

            <div className='flex justify-center'>
              <button
                onClick={handleCheckAnswer}
                className='
                  bg-blue-600 
                  text-white 
                  px-8 
                  py-2 
                  rounded-lg 
                  shadow-md 
                  transition-all 
                  duration-300 
                  hover:bg-blue-700 
                  hover:shadow-xl 
                  hover:scale-105 
                  active:scale-95
                '
              >
                Проверить
              </button>
            </div>
          </>
        )}

        {showAnswer && (
          <>
            <p className='mt-6 text-lg'>
              Правильный ответ: <strong>{currentCard.answer.split(" ")[0]}</strong>
            </p>
            <p className={`mt-2 ${isCorrect ? "text-green-600" : "text-red-600"} font-semibold`}>
              {isCorrect ? "Верно!" : "Неверно"}
            </p>
            <div className='flex justify-center'>
              <button
                onClick={handleNext}
                className='
                  mt-6 
                  bg-gray-700 
                  text-white 
                  px-5 
                  py-2 
                  rounded-lg 
                  shadow-md 
                  transition-all 
                  duration-300 
                  hover:bg-gray-800 
                  hover:shadow-xl 
                  hover:scale-105 
                  active:scale-95
                '
              >
                Следующий вопрос
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CardsPage;
