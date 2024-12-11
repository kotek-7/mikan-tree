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
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow rounded">
          {props.dialogContent}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
