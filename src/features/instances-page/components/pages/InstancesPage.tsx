import Navbar from "@/features/instances-page/components/organisms/Navbar";
import ControlPanel from "@/features/instances-page/components/organisms/ControlPanel";
import CardList from "@/features/instances-page/components/organisms/CardList";
import { useEffect, useState } from "react";
import { Card } from "@/features/instances-page/types/card";
import { fetchInstances } from "@/features/instances-page/logics/fetchInstances";

export default function InstancesPage() {
  useEffect(() => {
    fetchInstances().then((instances) => {
        const cards = instances.map((instance) => Card.fromInstance(instance))
        setCards(cards);
    })
  }, []);

  const [selectedCardId, setSelectedCardId] = useState<string>("0");

  const [cards, setCards] = useState<Card[]>([]);

  return (
    <div className="grid h-[100vh] grid-cols-[1fr_8rem] grid-rows-[min-content_1fr_1fr] overflow-hidden">
      <div className="col-span-full">
        <Navbar />
      </div>
      <CardList
        cards={cards}
        selectedCardId={selectedCardId}
        setSelectedCardId={setSelectedCardId}
      />
      <div className="">
        <ControlPanel selectedCard={cards.find((card) => (card.id == selectedCardId))} />
      </div>
    </div>
  );
}
