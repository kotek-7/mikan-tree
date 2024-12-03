import { invoke } from "@tauri-apps/api/core";
import ControlPanelButton from "@/components/molecules/ControlPanelButton";
import { Card } from "@/features/instances-page/types/card";
import { useEffect, useState } from "react";
import { message } from "@tauri-apps/plugin-dialog";
import { deleteInstance } from "../../logics/rwInstances";

interface Props {
  selectedCard?: Card;
  loadInstances: () => void;
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

  async function removeInstanceAndReload() {
    const id = props.selectedCard?.id;
    console.log(`removeInstanceAndReload: Removing instance with id ${id}`);
    if (id == undefined) {
      console.log("error!")
      throw new ReferenceError("Card not selected!");
    }
    deleteInstance(id);
    props.loadInstances();
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
      <ControlPanelButton onClick={removeInstanceAndReload}>Remove</ControlPanelButton>
    </div>
  );
}
