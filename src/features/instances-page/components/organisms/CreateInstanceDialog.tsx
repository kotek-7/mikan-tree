import * as Dialog from "@radix-ui/react-dialog";

export default function CreateInstanceDialog() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  }

  return (
    // aria-describedby: see https://www.radix-ui.com/primitives/docs/components/dialog#description 
    <Dialog.Content aria-describedby={undefined} className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow rounded w-96">
      <Dialog.Title className="text-xl">Create Instnace</Dialog.Title>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <label className="text-sm">
            Name
            <input type="text" id="name" className="w-full border rounded p-1" />
          </label>
          <label className="text-sm mt-4">
            Icon
            <input type="text" id="icon" className="w-full border rounded p-1" />
          </label>
          <div className="flex justify-end">
            <Dialog.Close asChild>
              <button type="submit" className="px-4 py-1 hover:bg-slate-100 active:bg-slate-200 rounded mt-4">Create</button>
            </Dialog.Close>
          </div>
        </form>
      </div>
      <Dialog.Close asChild>
        <button className="px-3 py-1 hover:bg-slate-100 active:bg-slate-200 rounded-full absolute right-3 top-3">
          x
        </button>
      </Dialog.Close>
    </Dialog.Content>
  );
}