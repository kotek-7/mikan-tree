import * as Menubar from "@radix-ui/react-menubar";
import { MenubarContent, MenubarTrigger, MenubarItem } from "../../wrappers/Menubar";

export default function Navbar() {
  return (
    <Menubar.Root>
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
