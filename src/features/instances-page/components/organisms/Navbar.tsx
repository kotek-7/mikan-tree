import * as Menubar from "@radix-ui/react-menubar";
import { MenubarContent, MenubarTrigger, MenubarItem } from "@/components/wrappers/Menubar";
import { invoke } from "@/utils/invoke";

export default function Navbar() {
  async function fetchInstances() {
    const instances = await invoke("fetch_instances");
    console.log(instances);
    return instances;
  }

  const alice = "D:\\Users\\kotek\\kotekDirs\\256png\\256_032.png"

  function writeTestInstances() {
    invoke("write_instances", {
      instances: [
        { name: "All the Mods 9 - To the Sky - atm9sky", iconPath: alice, id: "0" },
        { name: "Better MC [FORGE] - BMC4", iconPath: alice, id: "1" },
        { name: "The Pixelmon Modpack", iconPath: alice, id: "2" },
        { name: "RLCraft", iconPath: alice, id: "3" },
        { name: "Prominence II RPG", iconPath: alice, id: "4" },
        { name: "Prominence II RPG Reforged", iconPath: alice, id: "5" },
      ],
    });
  }

  function getTestStruct() {
    let struct = invoke("get_struct");
    console.log(struct);
  }

  function getTestStructs() {
    let structs = invoke("get_structs");
    console.log(structs);
  }

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent>
            <MenubarItem onSelect={fetchInstances}>Fetch instances</MenubarItem>
            <MenubarItem onSelect={writeTestInstances}>Write instances</MenubarItem>
            <MenubarItem>File</MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent>
            <MenubarItem onSelect={getTestStruct}>Get struct</MenubarItem>
            <MenubarItem onSelect={getTestStructs}>Get structs</MenubarItem>
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
