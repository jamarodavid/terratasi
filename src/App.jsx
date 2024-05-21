import NavBar from "./components/NavBar";
import TrashTypes from "./sections/About/TrashTypes/TrashTypes";
import Hero from "./sections/Hero/Hero";

export default function App() {
  return (
    <>
      <main className="">
        <NavBar />
        <section className="py-36 md:px-[40px] lg:px-[120px]">
          <Hero />
        </section>
        <section className="md:px-[120px] px-12 py-36">
          <TrashTypes />
        </section>
      </main>
    </>
  );
}
