import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Text App</h1>
      </main>
    </div>
  );
}
