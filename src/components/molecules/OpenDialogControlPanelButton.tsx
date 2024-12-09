import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay } from "../wrappers/Dialog";
import { ReactNode } from "react";
import ControlPanelButton from "./ControlPanelButton";

interface Props {
  buttonContent: ReactNode;
  dialogContent: ReactNode;
}

export default function OpenDialogControlPanelButton(props: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ControlPanelButton onClick={() => { return; }}>{props.buttonContent}</ControlPanelButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <Dialog.Content>
          {props.dialogContent}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
