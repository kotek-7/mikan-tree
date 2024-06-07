import Navbar from "./organisms/Navbar";

export default function App() {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <div className="col-span-full">
        <Navbar />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}
