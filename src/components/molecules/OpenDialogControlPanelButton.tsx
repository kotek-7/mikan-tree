import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay } from "../wrappers/Dialog";
import { ReactNode } from "react";
import ControlPanelButton from "./ControlPanelButton";

interface Props {
  children: ReactNode;
  dialogContent: ReactNode;
}

export default function OpenDialogControlPanelButton(props: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ControlPanelButton onClick={() => { return; }}>{props.children}</ControlPanelButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        {props.dialogContent}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
