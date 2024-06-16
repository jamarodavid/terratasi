import Footer from "./components/Footer";
import MyLineChart from "./components/MyLineChart";
import NavBar from "./components/NavBar";
import FamousQuotes from "./sections/About/FamousQuotes/FamousQuotes";
import Impact from "./sections/About/Impact/Impact";

import Quotes from "./sections/About/Quotes/Quotes";
import ReorderComponent from "./sections/About/Quotes/ReorderComponent";
import VelocityScrollAnimation from "./sections/About/Quotes/VelocityScrollAnimation";
import TrashTypes from "./sections/About/TrashTypes/TrashTypes";
import Contactt from "./sections/contact/Contactt";
import Faq from "./sections/FAQ/Faq";
import Hero from "./sections/Hero/Hero";
import Konservasi from "./sections/Konservasi/Konservasi";


export default function App() {
  return (
    <>
      <main className="relative">
        <NavBar />
        <section className="mt-24 max-md:mt-16 md:px-[40px] lg:px-[120px] container">
          <Hero />
        </section>

        <section className="lg:px-[120px] md:px-[70px] px-12 py-36 container">
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
        <section className="container pt-36">
            <MyLineChart />
          </section>

        <section className="lg:px-[120px] md:px-[70px] px-12 py-36 container">
          
          <section className="mt-52">
            <Faq />
          </section>
        </section>
        <section>
          {/* <ReorderComponent /> */}
        {/* <VelocityScrollAnimation /> */}
        </section>
        <section className="mt-52">
          <Konservasi />
        </section>

        <section className="lg:px-[120px] md:px-[70px] px-12 py-36 container">
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
