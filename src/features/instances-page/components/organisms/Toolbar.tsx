import { invoke } from "@tauri-apps/api/core";
import ToolbarItem from "../molecules/ToolbarItem";

interface Props {
  loadInstances: () => void;
}

export default function Toolbar(props: Props){
  function openModsPage() {
    invoke("open_mods_page")
  }
  
  return (
    <div className="flex divide-x bg-slate-100 text-slate-800">
      <ToolbarItem onClick={openModsPage}>Mods</ToolbarItem>
      <ToolbarItem onClick={props.loadInstances}>Reload</ToolbarItem>
      <ToolbarItem onClick={() => {console.log("toolbar item clicked")}}>Add</ToolbarItem>
    </div>
  );
}
