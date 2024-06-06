import * as Menubar from "@radix-ui/react-menubar"
export default function App() {
  return(
    <div className="grid grid-cols-3 grid-rows-3">
      <div className="col-span-full bg-red-300">
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger>File</Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content>
                <Menubar.Item>
                  New Tab
                </Menubar.Item>
                <Menubar.Item>
                  New Window
                </Menubar.Item>
                <Menubar.Item>
                  New Pane
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger>File</Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content>
                <Menubar.Item>
                  New Tab
                </Menubar.Item>
                <Menubar.Item>
                  New Window
                </Menubar.Item>
                <Menubar.Item>
                  New Pane
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger>File</Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content>
                <Menubar.Item>
                  New Tab
                </Menubar.Item>
                <Menubar.Item>
                  New Window
                </Menubar.Item>
                <Menubar.Item>
                  New Pane
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
      </div>
    </div>
  )
}
