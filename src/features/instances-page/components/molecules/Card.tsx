import { convertFileSrc } from "@tauri-apps/api/core";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  id: string;
  iconPath: string;
  selected: boolean;
  onclick: (id: string) => void;
}

export default function Card(props: Props) {
  return (
    <button
      onClick={() => props.onclick(props.id)}
      className={twMerge(
        props.selected ? "ring" : "",
        "flex flex-col items-center justify-center rounded px-1 border bg-white shadow hover:bg-slate-100 active:bg-slate-200"
      )}
    >
      <img src={convertFileSrc(props.iconPath)} className="w-12 object-cover"></img>
      <div className="mt-2 text-center line-clamp-2 text-sm">{props.title}</div>
    </button>
  );
}
