import Image from "next/image";
import { BasicEditor } from "./BasicEditor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-900 p-9 rounded-md w-11/12 flex flex-col items-center">
        <p className="text-7xl font-margin text-yellow-600">Margin</p>
        <p className="text-yellow-600 font-medium">001 - MoizLabs</p>
      </div>
      <BasicEditor />
    </main>
  );
}
