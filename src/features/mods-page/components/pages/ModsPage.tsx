import ModTree from "@/features/mods-page/components/organisms/ModTree";
import { ModTreeNode, ModTree as Tree, findNodes } from "@/features/mods-page/types/modTree";
import flan from "@/assets/images/flan.png";
import { Image } from "@/types/image";
import ControlPanel from "../organisms/ControlPanel";
import { useState } from "react";

export default function ModsPage() {
  const [modTree, setModTree] = useState<Tree>({
    nodes: [
      { id: "21", name: "Just Enough Items (JEI)", icon: Image.from(flan) },
      { id: "22", name: "Xearo's WorldMap", icon: Image.from(flan) },
      {
        id: "15",
        name: "Tech",
        nodes: [
          { id: "0", name: "Mekanism", icon: Image.from(flan) },
          { id: "1", name: "Create", icon: Image.from(flan) },
          { id: "15", name: "Immersive Engineering", icon: Image.from(flan) },
          { id: "16", name: "Refined Storage", icon: Image.from(flan) },
          { id: "17", name: "Industrial Foregoing", icon: Image.from(flan) },
          { id: "18", name: "Applied Energestics 2 (AE2)", icon: Image.from(flan) },
          { id: "19", name: "Thermal Expantion", icon: Image.from(flan) },
          { id: "20", name: "RFTools", icon: Image.from(flan) },
        ]
      },
      {
        id: "2",
        name: "Magic",
        nodes: [
          { id: "3", name: "Ars Nouveau", icon: Image.from(flan) },
          { id: "9", name: "Apotheosis", icon: Image.from(flan) },
          { id: "10", name: "Ice and Fire: Dragons", icon: Image.from(flan) },
          { id: "11", name: "Mystical Agriculture", icon: Image.from(flan) },
          { id: "12", name: "Blood Magic", icon: Image.from(flan) },
          { id: "13", name: "ProjectE", icon: Image.from(flan) },
          { id: "14", name: "Evil Craft", icon: Image.from(flan) },
          {
            id: "7",
            name: "Automation",
            nodes: [
              { id: "8", name: "Botania", icon: Image.from(flan)},
            ]
          },
        ]
      },
      {
        id: "4",
        name: "Transport",
        nodes: [
          { id: "5", name: "EnderIO", icon: Image.from(flan) },
          { id: "6", name: "Flux Networks", icon: Image.from(flan) },
        ],
      },
    ],
  });

  const [selectedId, setSelectedId] = useState("0");

  const selectedNode: ModTreeNode | undefined = (() => {
    const foundNodes = findNodes(modTree, selectedId);

    if (foundNodes.length === 0) return undefined;

    return foundNodes[0];
  })();

  return (
    <div className="grid grid-cols-[1fr_10rem] grid-rows-1">
      <div>
        <ModTree
          modTree={modTree}
          selectedId={selectedId}
          onBranchNodeClick={setSelectedId}
          onLeafNodeClick={setSelectedId}
        />
      </div>
      <div>
        <ControlPanel selectedNodeData={selectedNode} />
      </div>
    </div>
  );
}
