import * as Collapsible from "@radix-ui/react-collapsible";
import { ModTreeBranchNode as BranchNode, ModTreeNode, isBranchNode, isLeafNode } from "@/features/mods-page/types/modTree";
import ModTreeLeafNode from "./ModTreeLeafNode";


export default function ModTreeBranchNode(node: BranchNode) {
  function buildNode(node: ModTreeNode) {
    if (isBranchNode(node)) return ModTreeBranchNode(node);
    if (isLeafNode(node)) return ModTreeLeafNode(node);
    throw new Error("Unknown type of ModTreeNode was passed")
  }

  function buildNodes(subNodes: ModTreeNode[]) {
    return subNodes.map((node) => buildNode(node));
  }

  return (
    <Collapsible.Root>
      <Collapsible.Trigger className="rounded w-full px-2 py-0.5 hover:bg-slate-100 active:bg-slate-200">
        {node.name}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="pl-4">
          {buildNodes(node.nodes)}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
