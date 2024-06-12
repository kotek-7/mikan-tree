import Navbar from "./organisms/Navbar";
import ControlPanel from "./organisms/ControlPanel";
import CardList, { Card } from "./organisms/CardList";
import { useState } from "react";

export default function App() {
  const [selectedCardId, setSelectedCardId] = useState<number>(0);

  const cards: Card[] = (() => {
    const resultCards: Card[] = [];
    for (let i = 0; i < 10; i++) {
      resultCards.push({ title: "Title", id: i });
    }
    return resultCards;
  })();

  return (
    <div className="grid h-[100vh] grid-cols-[1fr_8rem] grid-rows-[min-content_1fr_1fr] overflow-hidden">
      <div className="col-span-full">
        <Navbar />
      </div>
      <CardList cards={cards} selectedCardId={selectedCardId} setSelectedCardId={setSelectedCardId}/>
      <div className="">
        <ControlPanel
          selectedCard={cards[selectedCardId]}
        />
      </div>
    </div>
  );
}
