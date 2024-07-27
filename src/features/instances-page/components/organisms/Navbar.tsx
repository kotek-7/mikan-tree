import * as Menubar from "@radix-ui/react-menubar";
import { MenubarContent, MenubarTrigger, MenubarItem } from "@/components/wrappers/Menubar";
import { invoke } from "@tauri-apps/api";
import alice from "@/assets/images/alice.png"

export default function Navbar() {
  async function fetchInstances() {
    const instances = await invoke("fetch_and_deserialize_instances");
    console.log(instances);
    return instances;
  }

  function writeInstances() {
    invoke("serialize_and_write_instances", {
      instances: [
        { name: "All the Mods 9 - To the Sky - atm9sky", icon: alice, id: "0" },
        { name: "Better MC [FORGE] - BMC4", icon: alice, id: "1" },
        { name: "The Pixelmon Modpack", icon: alice, id: "2" },
        { name: "RLCraft", icon: alice, id: "3" },
        { name: "Prominence II RPG", icon: alice, id: "4" },
        { name: "Prominence II RPG Reforged", icon: alice, id: "5" },
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
