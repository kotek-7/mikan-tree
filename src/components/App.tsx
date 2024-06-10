import Navbar from "./organisms/Navbar";
import ControlPanel from "./organisms/ControlPanel";
import CardList from "./organisms/CardList";

export default function App() {
  return (
    <div className="grid h-[100vh] grid-cols-[1fr_8rem] grid-rows-[min-content_1fr_1fr] overflow-hidden">
      <div className="col-span-full">
        <Navbar />
      </div>
      <CardList />
      <div className="">
        <ControlPanel />
      </div>
    </div>
  );
}
