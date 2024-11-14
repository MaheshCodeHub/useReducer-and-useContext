import React, { useContext } from "react";
import Card from "../Card/Card";
import CardsHook from "../../Hook/CardsHook";



function CardList({ dispatch,editCard}) {

          const cards=  CardsHook()
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {cards.map((card) => (
         
          <Card
            key={card.id}
            name={card.name}
            role={card.role}
            img={card.image}
            id={card.id}  
              
            editCard={editCard}   
          ></Card>
        ))}
      </div>
      ;
    </>
  );
}

export default CardList;
