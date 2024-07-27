import { clsx } from "clsx";
import { Image } from "@/types/image";

interface Props {
  readonly name: string;
  readonly id: string;
  readonly selected: boolean;
  readonly setSelectedModid: (id: string) => void;
  readonly icon: Image;
}

export default function ModListElement(props: Props) {
  return (
    <li
      onClick={() => {
        props.setSelectedModid(props.id);
      }}
      className={clsx("px-2 py-1", {
        "bg-slate-200": props.selected,
        "odd:bg-white even:bg-slate-50 hover:bg-slate-100 active:bg-slate-200": !props.selected,
      })}
    >
      <div className="flex gap-2">
        <img src={props.icon.path} className="w-8 h-8 object-cover"/>
        <div>
          {props.name}
        </div>
      </div>
    </li>
  );
}
