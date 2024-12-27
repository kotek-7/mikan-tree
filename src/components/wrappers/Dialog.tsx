import { ComponentPropsWithRef } from "react";
import { Overlay } from "@radix-ui/react-dialog";

export function DialogOverlay(props: ComponentPropsWithRef<typeof Overlay>) {
  return (
    <Overlay
      ref={props.ref}
      className="fixed inset-0 bg-black/50"
      {...props}
    />
  )
}
