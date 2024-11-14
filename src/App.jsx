import { useReducer, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import AddCard from "./Components/AddCard/AddCard";
import CardDB from "./data/CardDB";
import CardContext from "./Context/CardContext";
import CardDispatchContext from "./context/CardDispatchContext";

function App() {
  // const [cards, setCards] = useState(CardDB);
  const [editablecard, seteditablecard] = useState(null);
  const [cards, dispatch] = useReducer(cardReducer, CardDB);

  function cardReducer(cards, action) {
    switch (action.type) {
      case "ADD":
        return [...cards, { ...action.playload, id: cards.length + 1 }];
      case "delete":
        return cards.filter((card) => card.id !== action.playload);
      case "update":
        const index = cards.findIndex((v) => v.id === action.playload.id);
        const newcards = [...cards];
        newcards.splice(index, 1, action.playload);
        seteditablecard(null);
        return newcards;
      default:
        return cards;
    }
  }

  function editCard(id) {
    // console.log(id);
    seteditablecard(cards.find((card) => card.id === id));
  }

  return (
    <>
      <CardContext.Provider value={cards}>
        <CardDispatchContext.Provider value={dispatch}>
          <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-700 underline mb-8">
              UseReducer And UseContext
            </h1>

            <div className="mb-6">
              <AddCard
                editablecard={editablecard}
                className="bg-blue-500 text-white p-4 rounded-md shadow-md hover:bg-blue-600 transition"
              />
            </div>

            <div className="container mx-auto">
              <CardList
              
                editCard={editCard}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md"
              />
            </div>
          </div>
        </CardDispatchContext.Provider>
      </CardContext.Provider>
    </>
  );
}

export default App;
