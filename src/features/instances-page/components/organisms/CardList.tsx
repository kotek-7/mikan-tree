import { Card } from "@/features/instances-page/types/card";
import InstanceCard from "@/features/instances-page/components/molecules/Card";

interface Props {
  cards: Card[],
  selectedCardId: number,
  setSelectedCardId: (targetCardId: number) => void,
}

export default function CardList(props: Props) {
  return (
    <div className="grid auto-rows-[8rem] grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] gap-2 p-2 overflow-y-auto">
      {props.cards.map((card) => (
        <InstanceCard
          key={card.id}
          title={card.title}
          id={card.id}
          selected={card.id == props.selectedCardId}
          onclick={(clickedCardId) => props.setSelectedCardId(clickedCardId)}
        />
      ))}
    </div>
  );
}
