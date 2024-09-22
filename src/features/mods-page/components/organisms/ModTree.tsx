import { ModTree as Tree, isBranchNode, isLeafNode } from "@/features/mods-page/types/modTree";
import ModTreeBranchNode from "../molecules/ModTreeBranchNode";
import ModTreeLeafNode from "../molecules/ModTreeLeafNode";
import * as ScrollArea from "@radix-ui/react-scroll-area";

interface Props {
  modTree: Tree;
  selectedId: string;
  onBranchNodeClick: (id: string) => void;
  onLeafNodeClick: (id: string) => void;
}

export default function ModTree(props: Props) {
  return (
    <ScrollArea.Root className="h-[100vh]">
      <ScrollArea.Viewport className="h-full">
        <div className="mx-2 my-2 flex flex-col gap-0.5">
          {props.modTree.nodes.map((node) => {
            if (isBranchNode(node))
              return (
                <ModTreeBranchNode
                  key={node.id}
                  node={node}
                  selectedId={props.selectedId}
                  onBranchNodeClick={props.onBranchNodeClick}
                  onLeafNodeClick={props.onLeafNodeClick}
                />
              );
            if (isLeafNode(node))
              return (
                <ModTreeLeafNode
                  key={node.id}
                  node={node}
                  selectedId={props.selectedId}
                  onClick={props.onLeafNodeClick}
                />
              );
            throw new Error("Unknown type of ModTreeNode was passed");
          })}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="">
        <ScrollArea.Thumb className="" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
