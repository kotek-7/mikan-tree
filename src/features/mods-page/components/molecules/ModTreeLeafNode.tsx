import { ModTreeLeafNode as LeafNode } from "@/features/mods-page/types/modTree";

export default function ModTreeLeafNode(node: LeafNode) {
  return (
    <div className="rounded flex items-center gap-1 px-2 py-1 hover:bg-slate-100 active:bg-slate-200">
      <img
        src={node.icon.path}
        className="h-7 w-7 object-cover"
      />
      <div>{node.name}</div>
    </div>
  );
}
