import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Overlay } from "@radix-ui/react-dialog";

export const DialogOverlay = forwardRef<ElementRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(
  (props, ref) => (
    <Overlay
      ref={ref}
      className="fixed inset-0 bg-black/90"
      {...props}
    />
  )
);
DialogOverlay.displayName = Overlay.displayName;
