import ToolbarItem from "../molecules/ToolbarItem";

interface Props {
  loadInstances: () => void;
}

export default function Toolbar(props: Props){
  return (
    <div className="flex divide-x bg-slate-50 text-slate-800">
      <ToolbarItem onClick={() => {console.log("toolbar item clicked")}}>Mods</ToolbarItem>
      <ToolbarItem onClick={props.loadInstances}>Reload</ToolbarItem>
      <ToolbarItem onClick={() => {console.log("toolbar item clicked")}}>Add</ToolbarItem>
    </div>
  );
}
