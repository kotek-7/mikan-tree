import { invoke } from "@tauri-apps/api/core";
import ControlPanelButton from "@/components/molecules/ControlPanelButton";
import { Card } from "@/features/instances-page/types/card";
import { useEffect, useState } from "react";
import { message } from "@tauri-apps/plugin-dialog";
import { deleteInstance } from "../../logics/rwInstances";
import OpenDialogControlPanelButton from "@/components/molecules/OpenDialogControlPanelButton";
import * as Dialog from "@radix-ui/react-dialog";

interface Props {
  selectedCard?: Card;
  loadInstances: () => void;
}

export default function ControlPanel(props: Props) {
  useEffect(() => {
    invoke("get_app_data_path").then((path) => { setPath(path as string) });
  }, [])

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

  const [path, setPath] = useState("");

  const dialogContent = (
    <div className="w-40">
      <Dialog.Title className="text-xl">Title</Dialog.Title>
      <div className="mt-3">
        <Dialog.Description>Description</Dialog.Description>
      </div>
      <div className="mt-4 flex justify-end">
        <Dialog.Close asChild>
          <button className="px-4 py-1 hover:bg-slate-100 active:bg-slate-200 rounded">
            Close
          </button>
        </Dialog.Close>
      </div>
    </div>
  )

  return (
    <div className="flex h-[85vh] flex-col border-l">
      <div className="text-center">title: {props.selectedCard?.title ?? ""}</div>
      <div className="text-center">id: {props.selectedCard?.id ?? ""}</div>
      <div className="flex-grow" />
      <OpenDialogControlPanelButton dialogContent={dialogContent}>Create New</OpenDialogControlPanelButton>
      <ControlPanelButton onClick={openInstanceModsPage}>Edit</ControlPanelButton>
      <ControlPanelButton onClick={show_info}>Change</ControlPanelButton>
      <ControlPanelButton onClick={removeInstanceAndReload}>Remove</ControlPanelButton>
    </div>
  );
}
