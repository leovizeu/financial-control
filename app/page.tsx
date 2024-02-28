import CurrentBalance from "./Components/CurrentBalance";

export default function Home() {
  return (
    <main className="bg-gray-900 flex min-h-screen flex-col items-center justify-between p-24 lg:p-24 lg:px-80">
      <div className="flex-col z-10 max-w-5xl w-full items-start justify-start font-mono text-sm md:flex">
        <h1 className="bg-gray-800 w-full flex justify-center text-xl p-6">
          Finance Control
        </h1>
        <CurrentBalance />
      </div>
    </main>
  );
}
