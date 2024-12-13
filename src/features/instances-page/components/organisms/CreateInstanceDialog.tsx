import * as Dialog from "@radix-ui/react-dialog";

export function CreateInstanceDialog() {
  return (
    <div className="w-40">
      <Dialog.Title className="text-xl">Title</Dialog.Title>
      <div className="mt-3">
        <Dialog.Description>Description</Dialog.Description>
      </div>
      <div className="mt-4 flex justify-end">
        <Dialog.Close asChild>
          <button className="px-2 py-0.5 rounded text-slate-100 bg-slate-800">
            Close
          </button>
        </Dialog.Close>
      </div>
    </div>
  );
}