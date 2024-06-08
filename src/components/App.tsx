import Navbar from "./organisms/Navbar";
import Card from "./molecules/Card";

export default function App() {
  return (
    <div className="grid h-[100vh] grid-cols-[1fr_8rem] grid-rows-[min-content_1fr_1fr] overflow-hidden">
      <div className="col-span-full">
        <Navbar />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-2 p-2 auto-rows-[8rem]">
        <Card title="Title"/>
        <Card title="Title"/>
        <Card title="Title"/>
        <Card title="Title"/>
        <Card title="Title"/>
        <Card title="Title"/>
        <Card title="Title"/>
        <Card title="Title"/>
      </div>
      <div className="bg-red-300">

      </div>
    </div>
  );
}
