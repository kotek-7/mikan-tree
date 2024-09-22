import { ModTreeLeafNode as LeafNodeData } from "@/features/mods-page/types/modTree";
import { twMerge } from "tailwind-merge";

interface Props {
  node: LeafNodeData;
  selectedId: string;
  onClick: (id: string) => void;
}

export default function ModTreeLeafNode(props: Props) {
  return (
    <button
      onClick={() => props.onClick(props.node.id)}
      className={twMerge(
        "flex w-full items-center gap-1 rounded px-2 py-1 hover:bg-slate-100 active:bg-slate-200",
        props.selectedId === props.node.id ? "bg-slate-200 hover:bg-slate-200 ring-1 ring-inset" : ""
      )}
    >
      <img
        src={props.node.icon.path}
        className="h-7 w-7 object-cover"
      />
      <div>{props.node.name}</div>
    </button>
  );
}
