import * as Collapsible from "@radix-ui/react-collapsible";
import {
  ModTreeBranchNode as BranchNodeData,
  ModTreeNode,
  isBranchNode,
  isLeafNode,
} from "@/features/mods-page/types/modTree";
import ModTreeLeafNode from "./ModTreeLeafNode";
import { twMerge } from "tailwind-merge";

interface Props {
  node: BranchNodeData;
  selectedId: string;
  onBranchNodeClick: (id: string) => void;
  onLeafNodeClick: (id: string) => void;
}

export default function ModTreeBranchNode(props: Props) {
  function buildNode(node: ModTreeNode) {
    if (isBranchNode(node))
      return (
        <ModTreeBranchNode
          node={node}
          selectedId={props.selectedId}
          onBranchNodeClick={props.onBranchNodeClick}
          onLeafNodeClick={props.onLeafNodeClick}
        />
      );
    if (isLeafNode(node))
      return (
        <ModTreeLeafNode
          node={node}
          selectedId={props.selectedId}
          onClick={props.onLeafNodeClick}
        />
      );
    throw new Error("Unknown type of ModTreeNode was passed");
  }

  function buildNodes(subNodes: ModTreeNode[]) {
    return subNodes.map((node) => buildNode(node));
  }

  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <button
          onClick={() => props.onBranchNodeClick(props.node.id)}
          className={twMerge(
            "w-full rounded px-2 py-0.5 hover:bg-slate-100 active:bg-slate-200", 
            props.selectedId === props.node.id ? "bg-slate-200 hover:bg-slate-200 ring-1 ring-inset" : ""
          )}
        >
          {props.node.name}
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="pl-4 flex flex-col gap-0.5">{buildNodes(props.node.nodes)}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
