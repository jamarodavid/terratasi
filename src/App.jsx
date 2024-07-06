import Footer from "./components/Footer";
import MyLineChart from "./components/MyLineChart";
import NavBar from "./components/NavBar";
import FamousQuotes from "./sections/About/FamousQuotes/FamousQuotes";
import Impact from "./sections/About/Impact/Impact";

import Quotes from "./sections/About/Quotes/Quotes";
import LeafDrawing from "./components/LeafDrawing";
import TrashTypes from "./sections/About/TrashTypes/TrashTypes";
import Collaborate from "./sections/Collaborate/Collaborate";
import VelocityScroll from "./components/VelocityScroll";

import Contactt from "./sections/contact/Contactt";
import Faq from "./sections/FAQ/Faq";
import Hero from "./sections/Hero/Hero";
import Konservasi from "./sections/Konservasi/Konservasi";
import ChatBubble from "./components/ChatBubble";
import Diff from "./components/Diff";
import Tabs from "./components/Tabs";
import Dampakk from "./sections/dampak/Dampakk";
import Dampak from "./sections/dampak/Dampak";

export default function App() {
  return (
    <>
      <main className="relative overflow-x-hidden">
        <NavBar />
        <section className="mt-24 max-md:mt-16 md:px-[40px] lg:px-[120px]">
          <Hero />
        </section>

        <div className="absolute -z-10 md:-left-60 -left-80 w-[440px] h-[440px] rounded-full bg-gradient-to-br from-amber-300 to-neutral-50"></div>
        <div className="absolute -z-10 md:-right-24 -right-36 mt-32 w-[220px] h-[220px] rounded-full bg-gradient-to-tl from-amber-300 to-neutral-50"></div>

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

        <section className="py-36 container">
          <section>
            <MyLineChart />
          </section>

          <section className="mt-52 relative">
            <div className="absolute -z-10 md:-left-60 -left-96 top-96 w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-amber-300 to-neutral-50"></div>
            <div className="absolute -z-10 md:-right-80 -right-60 top mt-32 w-[320px] h-[320px] rounded-full bg-gradient-to-l from-amber-300 to-neutral-50"></div>
            <Faq />
          </section>
          <section className="mt-52">
            <Dampak />
          </section>
          <section className="mt-52">
            <Dampakk />
          </section>
        </section>

        <section className="container">
          <section>
            <LeafDrawing />
          </section>
          <section>
            <ChatBubble />
          </section>
          <section>
            <Diff />
          </section>
          <section>
            <Tabs />
          </section>
        </section>

        <section className="mt-52">
          <VelocityScroll baseVelocity={-5}>TerraTasi</VelocityScroll>
          <VelocityScroll baseVelocity={5}>Peduli Lingkungan</VelocityScroll>
        </section>

        <section className="mt-52">
          <Konservasi />
        </section>

        <section className="lg:px-[120px] md:px-[70px] px-12 py-36 container">
          <section className="mt-52 relative">
            <div className="absolute -z-10 md:-left-90 -left-96 top-36 w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-amber-300 to-neutral-50"></div>
            <div className="absolute -z-10 md:-right-40 -right-60 w-[320px] h-[320px] rounded-full bg-gradient-to-l from-amber-300 to-neutral-50"></div>
            <Contactt />
          </section>
          <section className="mt-52">
            <Collaborate />
          </section>
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
