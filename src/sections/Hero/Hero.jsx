import "./Hero.css";
import { hero1, hero2, hero3, hero4, hero5, hero6, hero7 } from "../../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-gradient-1 to-gradient-2 rounded-[70px] py-14"
    >
      <div className="flex justify-center font-lora flex-col items-center gap-2">
        <h1 className="md:text-5xl text-4xl text-center text-color-2 font-semibold mb-4 md:w-11/12 w-10/12">
          Mari Bersama-sama, Lestarikan Nusantara Satu Langkah Demi
          Kesejahteraan Alam
        </h1>
        <p className="md:text-base text-sm text-center text-color-2 leading-normal font-poppins mx-12 xl:mx-60 mb-3">
          "TerraTasi" adalah sebuah platform daring yang bertujuan untuk
          mengedukasi dan menginspirasi masyarakat tentang pentingnya menjaga
          kebersihan lingkungan, terutama di tempat-tempat wisata di Nusantara
        </p>
        <div>
          <button>
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="text font-poppins font-medium">
              Lihat Selengkapnya
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 grid-rows-1 gap-3 items-end px-12">
        <div>
          <img src={hero1} className="md:mb-4 mb-2" />
          <img src={hero2} />
        </div>
        <img src={hero3} />
        <img src={hero4} />
        <img src={hero5} />
        <div>
          <img src={hero6} className="md:mb-4 mb-2" />
          <img src={hero7} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
