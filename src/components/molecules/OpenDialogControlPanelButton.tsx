import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay } from "../wrappers/Dialog";
import { ReactNode } from "react";
import ControlPanelButton from "./ControlPanelButton";

interface Props {
  children: ReactNode;
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dialogContent: ReactNode;
}

export default function OpenDialogControlPanelButton(props: Props) {
  return (
    <Dialog.Root
      open={props.isDialogOpen}
      onOpenChange={props.setIsDialogOpen}
    >
      <Dialog.Trigger asChild>
        <ControlPanelButton
          onClick={() => {}}
        >
          {props.children}
        </ControlPanelButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        {props.dialogContent}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
