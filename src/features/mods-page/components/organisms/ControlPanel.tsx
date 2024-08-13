import ControlPanelButton from "@/components/molecules/ControlPanelButton";
import { Root as Separator } from "@radix-ui/react-separator";

export default function ControlPanel() {
  return (
    <div className="flex h-[95vh] flex-col items-center border-l px-1 py-4 my-2">
      <div className="">Hll</div>
      <div className="h-full" />
      <ControlPanelButton onClick={() => {;}}>Remove</ControlPanelButton>
      <ControlPanelButton onClick={() => {;}}>Rename</ControlPanelButton>
      <ControlPanelButton onClick={() => {;}}>Change</ControlPanelButton>
      <ControlPanelButton onClick={() => {;}}>Move</ControlPanelButton>
      <Separator className="my-2 h-[1px] w-4/5 bg-slate-300"/>
      <ControlPanelButton onClick={() => {;}}>New Mod</ControlPanelButton>
      <ControlPanelButton onClick={() => {;}}>New Folder</ControlPanelButton>
    </div>
  );
}
