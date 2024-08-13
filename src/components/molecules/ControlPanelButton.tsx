import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function ControlPanelButton(props: Props) {
  return (
    <button onClick={props.onClick} className="w-full text-center rounded bg-white px-3 py-0.5 hover:bg-slate-100 active:bg-slate-200">{props.children}</button>
  );
}
