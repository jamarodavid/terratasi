import Footer from "./components/Footer";
import MyLineChart from "./components/MyLineChart";
import NavBar from "./components/NavBar";

import FamousQuotes from "./sections/About/FamousQuotes/FamousQuotes";
import Impact from "./sections/About/Impact/Impact";
import Quotes from "./sections/About/Quotes/Quotes";
import TrashTypes from "./sections/About/TrashTypes/TrashTypes";
import Contact from "./sections/contact/Contact";
import Contactt from "./sections/contact/Contactt";
import Faq from "./sections/FAQ/Faq";
import Hero from "./sections/Hero/Hero";
import Konservasi from "./sections/Konservasi/Konservasi";

export default function App() {
  return (
    <>
      <main className="relative">
        <NavBar />
        <section className="mt-24 max-md:mt-16 md:px-[40px] lg:px-[120px]">
          <Hero />
        </section>

        <section className="lg:px-[120px] md:px-[70px] px-12 py-36">
          <section>
            <Quotes />
          </section>
          <section className="mt-52">
            <FamousQuotes />
          </section>
          <section className="mt-52">
            <TrashTypes />
          </section>
        </section>

        <section className="mt-52">
          <Impact />
        </section>

        <section className="lg:px-[120px] md:px-[70px] px-12 py-36">
          <section>
            <MyLineChart />
          </section>
          <section className="mt-52">
            <Faq />
          </section>
        </section>
        
        <section className="mt-52">
          <Konservasi />
        </section>

        <section className="lg:px-[120px] md:px-[70px] px-12 py-36">
          <section className="mt-52">
            <Contactt />
          </section>
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
