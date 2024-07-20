import { invoke } from "@tauri-apps/api/tauri";
import ControlPanelButton from "@/components/molecules/ControlPanelButton";
import { Card } from "@/types/card";

interface Props {
  selectedCard: Card;
}

export default function ControlPanel(props: Props) {
  function clickMock() {
    console.log("clicked!");
  }

  function openModsPage() {
    invoke("open_mods_page");
  }

  return (
    <div className="flex h-[85vh] flex-col border-l">
      <div className="text-center">title: {props.selectedCard.title}</div>
      <div className="text-center">id: {props.selectedCard.id}</div>
      <div className="flex-grow" />
      <ControlPanelButton onClick={clickMock}>Create New</ControlPanelButton>
      <ControlPanelButton onClick={openModsPage}>Edit</ControlPanelButton>
      <ControlPanelButton onClick={clickMock}>Change</ControlPanelButton>
      <ControlPanelButton onClick={clickMock}>Remove</ControlPanelButton>
    </div>
  );
}
