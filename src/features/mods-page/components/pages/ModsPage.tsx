import ModList from "@/features/mods-page/components/organisms/ModList";
import { Mod } from "@/features/mods-page/types/mod";
import { useState } from "react";
import ControlPanel from "@/features/mods-page/components/organisms/ControlPanel";

export default function ModsPage() {
  const mods: readonly Mod[] = [
    { name: "optifine", id: "0" },
    { name: "jei", id: "1" },
    { name: "mekanism", id: "2" },
    { name: "mekanism", id: "3" },
    { name: "mekanism", id: "4" },
    { name: "mekanism", id: "5" },
    { name: "mekanism", id: "6" },
    { name: "mekanism", id: "7" },
    { name: "mekanism", id: "8" },
    { name: "mekanism", id: "9" },
    { name: "mekanism", id: "10" },
    { name: "mekanism", id: "11" },
    { name: "mekanism", id: "12" },
    { name: "mekanism", id: "13" },
    { name: "mekanism", id: "14" },
    { name: "mekanism", id: "15" },
    { name: "mekanism", id: "16" },
    { name: "mekanism", id: "17" },
    { name: "mekanism", id: "18" },
    { name: "mekanism", id: "19" },
  ];

  const [selectedModId, setSelectedModId] = useState("0");

  return (
    <div>
      <div className="grid grid-cols-[8rem_minmax(16rem,1fr)_8rem]">
        <div className="">
          <ControlPanel />
        </div>
        <div className="h-[calc(100vh-2rem)] overflow-y-auto">
          <ModList mods={mods} selectedModId={selectedModId} setSelectedModId={setSelectedModId}/>
        </div>
        <div className="">
          <div>
            {(mods.find((mod) => mod.id == selectedModId))?.name}
          </div>
          <div>
            id: {selectedModId}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 text-sm pb-1 px-2 border-t w-full">
        status
      </div>
    </div>
  );
}
