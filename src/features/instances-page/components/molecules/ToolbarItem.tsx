import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function ToolbarItem(props: Props) {
  return (
    <button onClick={props.onClick} className="px-4 py-2 hover:bg-slate-100 active:bg-slate-200">{props.children}</button>
  );
}
