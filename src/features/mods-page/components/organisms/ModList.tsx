import ModListElement from "@/features/mods-page/components/molecules/ModListElement";
import { Mod } from "@/features/mods-page/types/mod";



interface Props {
  selectedModId: string;
  setSelectedModId: (id: string) => void;
  mods: readonly Mod[];
}

export default function ModList(props: Props) {
  return (
    <div>
      <ul className="divide-y">
        {props.mods.map((mod) => (
          <ModListElement
            name={mod.name}
            selected={mod.id == props.selectedModId}
            setSelectedModid={props.setSelectedModId}
            id={mod.id}
            key={mod.id}
          />
        ))}
      </ul>
    </div>
  );
}
