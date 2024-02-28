import CurrentBalance from "./Components/CurrentBalance";
import Income from "./Components/Income";

export default function Home() {
  return (
    <main className="bg-gray-900 flex justify-center min-h-screen p-24 ">
      <div className="flex-col z-10 max-w-5xl w-96 items-center justify-start font-mono text-sm md:flex">
        <h1 className="w-full flex justify-center text-xl p-6">
          Finance Control
        </h1>
        <CurrentBalance />
        <Income />
      </div>
    </main>
  );
}
