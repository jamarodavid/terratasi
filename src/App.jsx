import Nav from "./components/Nav";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <>
      <main className="">
        <Nav />
        <section className="px-[120px] py-36">
          <Hero />
        </section>
      </main>
    </>
  );
}
