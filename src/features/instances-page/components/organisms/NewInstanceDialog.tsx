import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface Props {
  setIsDialogVisible: React.Dispatch<React.SetStateAction<boolean>> 
  onSubmit: (inputName: string, inputIconPath: string) => void;
}

export default function NewInstanceDialog(props: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputName === "" || inputIconPath === "") {
      setFormMessage("Please fill out all fields.");
      return;
    }
    props.onSubmit(inputName, inputIconPath);
    props.setIsDialogVisible(false);
  }

  const [inputName, setInputName] = useState("");
  const [inputIconPath, setInputIconPath] = useState("");
  const [formMessage, setFormMessage] = useState("");

  return (
    // aria-describedby: see https://www.radix-ui.com/primitives/docs/components/dialog#description
    <Dialog.Content
      aria-describedby={undefined}
      className="fixed left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow"
    >
      <Dialog.Title className="text-xl">Create Instnace</Dialog.Title>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <label className="text-sm">
            Name
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="w-full rounded border p-1"
            />
          </label>
          <label className="mt-4 text-sm">
            Icon
            <input
              type="text"
              value={inputIconPath}
              onChange={(e) => setInputIconPath(e.target.value)}
              className="w-full rounded border p-1"
            />
          </label>
          <div className="mt-2 text-sm text-red-500">{formMessage}</div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 rounded px-4 py-1 hover:bg-slate-100 active:bg-slate-200"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={() => {
          props.setIsDialogVisible(false);
        }}
        className="absolute right-3 top-3 rounded-full px-3 py-1 hover:bg-slate-100 active:bg-slate-200"
      >
        x
      </button>
    </Dialog.Content>
  );
}
