import Footer from "./components/Footer";
import MyLineChart from "./components/MyLineChart";
import NavBar from "./components/NavBar";
import FamousQuotes from "./sections/About/FamousQuotes/FamousQuotes";
import Impact from "./sections/About/Impact/Impact";

import Quotes from "./sections/About/Quotes/Quotes";
import LeafDrawing from "./components/LeafDrawing";
import TrashTypes from "./sections/About/TrashTypes/TrashTypes";
import Collaborate from "./sections/Collaborate/Collaborate";

import Contactt from "./sections/contact/Contactt";
import Faq from "./sections/FAQ/Faq";
import Hero from "./sections/Hero/Hero";
import Konservasi from "./sections/Konservasi/Konservasi";
import ChatBubble from "./components/ChatBubble";
import Diff from "./components/Diff";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <>
      <main className="relative">
        <NavBar />
        <section className="mt-24 max-md:mt-16 md:px-[40px] lg:px-[120px]">
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

        <section className="py-36 container">
          <section>
            <MyLineChart />
          </section>

          <section className="lg:px-[120px] md:px-[70px] px-12 py-36 container">
            <section className="mt-52">
              <Faq />
            </section>
          </section>
        </section>
        
        <section>

          <LeafDrawing />
        {/* <VelocityScrollAnimation /> */}
        </section>
        <section className="container">
          <ChatBubble />
        </section>
        <section className="container">
          <Diff />
        </section>
        <section className="container">
        <Tabs />
        </section>


        <section className="mt-52">
          <Konservasi />
        </section>

        <section className="lg:px-[120px] md:px-[70px] px-12 py-36 container">
          <section className="mt-52">
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
