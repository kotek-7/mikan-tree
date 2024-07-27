import ModListElement from "@/features/instance-mods-page/components/molecules/ModListElement";
import { Mod } from "@/features/instance-mods-page/types/mod";
import icon from "@/assets/images/alice.png"
import { Image } from "@/types/image";


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
            icon={Image.from(icon)}
            key={mod.id}
          />
        ))}
      </ul>
    </div>
  );
}
