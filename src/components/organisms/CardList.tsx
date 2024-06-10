import { useState } from "react";
import Card from "../molecules/Card";

interface Card {
  title: string;
  id: number;
}

const [selectedCard, setSelectedCard] = useState<number>(0);

const cards: Card[] = (() => {
  const resultCards: Card[] = [];
  for (let i = 0; i < 10; i++) {
    resultCards.push({ title: "Title", id: i });
  }
  return resultCards;
})();

export default function CardList() {
  return (
    <div className="grid auto-rows-[8rem] grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-2 p-2">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          id={card.id}
          selected={card.id == selectedCard}
          onclick={(clickedCardId) => setSelectedCard(clickedCardId)}
        />
      ))}
    </div>
  );
}
