import Navbar from "@/features/instances-page/components/organisms/Navbar";
import ControlPanel from "@/features/instances-page/components/organisms/ControlPanel";
import CardList from "@/features/instances-page/components/organisms/CardList";
import { useEffect, useState } from "react";
import { useCards } from "@/features/instances-page/hooks/useCards";
import Toolbar from "../organisms/Toolbar";

export default function InstancesPage() {
  const [selectedCardId, setSelectedCardId] = useState<string>("0");

  const [cards, loadInstnces] = useCards();

  useEffect(() => {
    loadInstnces();
  }, []);

  return (
    <div className="grid h-[100vh] grid-cols-[1fr_8rem] grid-rows-[min-content_min-content_1fr] overflow-hidden">
      <div className="col-span-full">
        <Navbar />
      </div>
      <div className="col-span-full">
        <Toolbar loadInstances={loadInstnces} />
      </div>
      <div>
        <CardList
          cards={cards}
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
        />
      </div>
      <div className="">
        <ControlPanel
          selectedCard={cards.find((card) => card.id == selectedCardId)}
          loadInstances={loadInstnces}
        />
      </div>
    </div>
  );
}
