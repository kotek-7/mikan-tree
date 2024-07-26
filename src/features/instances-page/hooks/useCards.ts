import { useState } from "react";
import { Card } from "@/features/instances-page/types/card";
import { fetchInstances } from "../logics/fetchInstances";

export function useCards(): [Card[], () => void] {
  const [cards, setCards] = useState<Card[]>([]);

  function loadInstances() {
    fetchInstances().then((instances) => {
      const cards = instances.map((instance) => Card.fromInstance(instance))
      setCards(cards);
      console.log("instances loaded");
    });
  }

  return [cards, loadInstances];
}
