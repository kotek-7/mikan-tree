import { Content, Item, Trigger } from "@radix-ui/react-menubar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const MenubarTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  (props, ref) => (
    <Trigger
      ref={ref}
      className="my-0.5 rounded px-3 hover:bg-slate-100 active:bg-slate-200"
      {...props}
    />
  )
);
MenubarTrigger.displayName = Trigger.displayName;

export const MenubarContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  (props, ref) => (
    <Content
      ref={ref}
      className="rounded bg-white p-0.5 shadow"
      {...props}
    />
  )
);
MenubarContent.displayName = Content.displayName;

export const MenubarItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>((props, ref) => (
  <Item
    ref={ref}
    className="rounded px-4 py-0.5 hover:bg-slate-100 active:bg-slate-200"
    {...props}
  />
));
MenubarItem.displayName = Item.displayName;
