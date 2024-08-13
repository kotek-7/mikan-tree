import { ModTree as Tree, isBranchNode, isLeafNode } from "@/features/mods-page/types/modTree";
import ModTreeBranchNode from "../molecules/ModTreeBranchNode";
import ModTreeLeafNode from "../molecules/ModTreeLeafNode";

interface Props {
  modTree: Tree;
}

export default function ModTree(props: Props) { return (
    <div className="mx-2 my-2">
      {props.modTree.nodes.map((node) => {
        if (isBranchNode(node)) return ModTreeBranchNode(node);
        if (isLeafNode(node)) return ModTreeLeafNode(node);
        throw new Error("Unknown type of ModTreeNode was passed");
      })}
    </div>
  );
}
