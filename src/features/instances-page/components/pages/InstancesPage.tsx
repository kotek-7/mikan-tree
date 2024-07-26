import Navbar from "@/features/instances-page/components/organisms/Navbar";
import ControlPanel from "@/features/instances-page/components/organisms/ControlPanel";
import CardList from "@/features/instances-page/components/organisms/CardList";
import { useEffect, useState } from "react";
import { useCards } from "@/features/instances-page/hooks/useCards";

export default function InstancesPage() {
  const [selectedCardId, setSelectedCardId] = useState<string>("0");

  const [cards, loadInstnces] = useCards();

  useEffect(() => {
    loadInstnces();
  }, []);

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
