import { clsx } from "clsx";

interface Props {
  readonly name: string;
  readonly id: string;
  readonly selected: boolean;
  readonly setSelectedModid: (id: string) => void;
}

export default function ModListElement(props: Props) {
  return (
    <li
      onClick={() => {
        props.setSelectedModid(props.id);
      }}
      className={clsx("px-4 py-1", {
        "bg-slate-200": props.selected,
        "odd:bg-white even:bg-slate-50 hover:bg-slate-100 active:bg-slate-200": !props.selected,
      })}
    >
      {props.name}
    </li>
  );
}
