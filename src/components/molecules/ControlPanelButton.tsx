import { ComponentPropsWithRef, ReactNode } from "react";

export default function ControlPanelButton(props: { children: ReactNode } & ComponentPropsWithRef<"button">) {
  return (
    <button
      ref={props.ref}
      onClick={props.onClick}
      className="w-full rounded bg-white px-3 py-0.5 text-center hover:bg-slate-100 active:bg-slate-200"
    >
      {props.children}
    </button>
  );
}