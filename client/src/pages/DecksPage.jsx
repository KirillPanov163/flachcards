import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeckApi from "../entities/decks/DeckApi";

function DecksPage() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      try {
        const data = await DeckApi.getAllDecks();
        setDecks(data);
      } catch (error) {
        console.log("Ошибка при получении колод: ", error);
      }
    }

    loadDecks();
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center">
        Выберите колоду!
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {decks.map((deck) => (
          <Link
            key={deck.id}
            to={`/decks/${deck.id}/cards`}
            className="
              bg-white 
              shadow-md 
              rounded-lg 
              w-60 
              h-28 
              flex 
              items-center 
              justify-center 
              text-center 
              p-4 
              border 
              border-gray-200 
              transition-all 
              duration-300 
              ease-in-out
              hover:shadow-xl 
              hover:-translate-y-1 
              hover:bg-blue-50 
              hover:cursor-pointer
              active:scale-95
            "
          >
            <h2 className="text-lg font-semibold text-blue-600">{deck.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DecksPage;
