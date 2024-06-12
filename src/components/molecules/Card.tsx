import { twMerge } from "tailwind-merge";

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
        "flex flex-col items-center justify-center rounded-xl border bg-white shadow hover:bg-slate-100 active:bg-slate-200"
      )}
    >
      <div className="h-12 w-12 bg-red-200"></div>
      <div className="mt-2 text-lg">{props.title}</div>card
    </button>
  );
}
