import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ControlPanelButton(props: Props) {
  return (
    <button className="rounded bg-white px-3 py-0.5 hover:bg-slate-100 active:bg-slate-200">{props.children}</button>
  );
}
