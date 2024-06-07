import { Content, Item, Trigger } from "@radix-ui/react-menubar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const MenubarTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  (props, ref) => (
    <Trigger
      ref={ref}
      className="my-1 rounded px-3 py-0.5 hover:bg-slate-50 active:bg-slate-100"
      {...props}
    />
  )
);
MenubarTrigger.displayName = Trigger.displayName;

export const MenubarContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  (props, ref) => (
    <Content
      ref={ref}
      className="rounded p-1 shadow"
      {...props}
    />
  )
);
MenubarContent.displayName = Content.displayName;

export const MenubarItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>((props, ref) => (
  <Item
    ref={ref}
    className="rounded px-4 py-0.5 hover:bg-slate-50 active:bg-slate-100"
    {...props}
  />
));
MenubarItem.displayName = Item.displayName;
