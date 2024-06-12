import ControlPanelButton from "../molecules/ControlPanelButton";
import { Card } from "./CardList";

interface Props {
  selectedCard: Card;
}

export default function ControlPanel(props: Props) {
  return (
    <div className="flex h-[85vh] flex-col border-l">
      <div className="text-center">title: {props.selectedCard.title}</div>
      <div className="text-center">id: {props.selectedCard.id}</div>
      <div className="flex-grow" />
      <ControlPanelButton>Create New</ControlPanelButton>
      <ControlPanelButton>Edit</ControlPanelButton>
      <ControlPanelButton>Change</ControlPanelButton>
      <ControlPanelButton>Remove</ControlPanelButton>
    </div>
  );
}
