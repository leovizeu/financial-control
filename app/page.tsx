import Expenses from "./Components/Expenses";

export default function Home() {
  return (
    <main className="dark:bg-gray-900 flex justify-center min-h-screen">
      <div className="flex-col z-10 max-w-5xl w-4/12 items-center justify-start font-mono text-sm md:flex">
        <h1 className="w-full flex justify-center text-xl p-6">
          Finance Control
        </h1>
        <Expenses />
      </div>
    </main>
  );
}
