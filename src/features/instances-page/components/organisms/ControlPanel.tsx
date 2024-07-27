import { invoke } from "@tauri-apps/api/tauri";
import ControlPanelButton from "@/components/molecules/ControlPanelButton";
import { Card } from "@/features/instances-page/types/card";
import { useEffect, useState } from "react";
import { message } from "@tauri-apps/api/dialog";

interface Props {
  selectedCard?: Card;
}

export default function ControlPanel(props: Props) {
  useEffect(() => {
    invoke("get_app_data_path").then((path) => {setPath(path as string)});
  }, [])

  const [path, setPath] = useState("");

  function clickMock() {
    console.log("clicked!");
  }

  function openInstanceModsPage() {
    invoke("open_instance_mods_page");
  }

  async function show_info() {
    await message(path)
  }

  return (
    <div className="flex h-[85vh] flex-col border-l">
      <div className="text-center">title: {props.selectedCard?.title ?? ""}</div>
      <div className="text-center">id: {props.selectedCard?.id ?? ""}</div>
      <div className="flex-grow" />
      <ControlPanelButton onClick={clickMock}>Create New</ControlPanelButton>
      <ControlPanelButton onClick={openInstanceModsPage}>Edit</ControlPanelButton>
      <ControlPanelButton onClick={show_info}>Change</ControlPanelButton>
      <ControlPanelButton onClick={clickMock}>Remove</ControlPanelButton>
    </div>
  );
}
