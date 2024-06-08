interface Prop {
  title: string;
}
export default function Card(prop: Prop) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border shadow">
      <div className="h-12 w-12 bg-red-200"></div>
      <div className="mt-2 text-lg">{prop.title}</div>
    </div>
  );
}
