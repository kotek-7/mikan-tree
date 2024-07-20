import { Image } from "@/types/image";
import { twMerge } from "tailwind-merge";
import flan from "@/assets/images/flan.png"

interface Props {
  title: string;
  id: number;
  selected: boolean;
  onclick: (id: number) => void;
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
      <img src={Image.from(flan).path} className="w-12 object-cover"></img>
      <div className="mt-2 text-center line-clamp-2 text-sm">{props.title}</div>
    </button>
  );
}
