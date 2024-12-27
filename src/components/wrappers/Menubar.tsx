import { Content, Item, Trigger } from "@radix-ui/react-menubar";
import { ComponentPropsWithRef } from "react";

export function MenubarTrigger(props: ComponentPropsWithRef<typeof Trigger>) {
  return (
    <Trigger
      ref={props.ref}
      className="my-0.5 rounded px-3 hover:bg-slate-100 active:bg-slate-200"
      {...props}
    />
  );
}

export function MenubarContent(props: ComponentPropsWithRef<typeof Content>) {
  return (
    <Content
      ref={props.ref}
      className="rounded bg-white p-0.5 shadow"
      {...props}
    />
  );
}

export function MenubarItem(props: ComponentPropsWithRef<typeof Item>) {
  return (
    <Item
      ref={props.ref}
      className="rounded px-4 py-0.5 hover:bg-slate-100 active:bg-slate-200"
      {...props}
    />
  );
}
