import ModTree from "@/features/mods-page/components/organisms/ModTree";
import { ModTree as Tree } from "@/features/mods-page/types/modTree";
import flan from "@/assets/images/flan.png"
import { Image } from "@/types/image";
import ControlPanel from "../organisms/ControlPanel";

export default function ModsPage() {
  const modTree: Tree = {
    nodes: [
      { id: "0", name: "Mekanism", icon: Image.from(flan) },
      { id: "1", name: "Create", icon: Image.from(flan) },
      { id: "2", name: "Magic", nodes: [
        { id: "3", name: "Ars Nouveau", icon: Image.from(flan) }
      ] },
      { id: "4", name: "Transport", nodes: [
        { id: "5", name: "EnderIO", icon: Image.from(flan) },
        { id: "6", name: "Flux Networks", icon: Image.from(flan) },
      ] },
    ]
  }
  return (
    <div className="grid grid-cols-[1fr_10rem] grid-rows-1">
      <div>
        <ModTree modTree={modTree}/>
      </div>
      <div>
        <ControlPanel />
      </div>
    </div>
  );
}
