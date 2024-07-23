import * as Menubar from "@radix-ui/react-menubar";
import { MenubarContent, MenubarTrigger, MenubarItem } from "@/components/wrappers/Menubar";
import { invoke } from "@tauri-apps/api";

export default function Navbar() {
  async function fetchInstances() {
    const instances = await invoke("fetch_and_deserialize_instances");
    console.log(instances);
    return instances;
  }

  function writeInstances() {
    invoke("serialize_and_write_instances", {
      instances: [
        { name: "Instance1", icon: "path/to/icon" },
        { name: "Instance2", icon: "path/to/icon" },
      ],
    });
  }

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent>
            <MenubarItem onSelect={fetchInstances}>Fetch instances</MenubarItem>
            <MenubarItem onSelect={writeInstances}>Write instances</MenubarItem>
            <MenubarItem>File</MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent>
            <MenubarItem>File</MenubarItem>
            <MenubarItem>File</MenubarItem>
            <MenubarItem>File</MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent>
            <MenubarItem>File</MenubarItem>
            <MenubarItem>File</MenubarItem>
            <MenubarItem>File</MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
