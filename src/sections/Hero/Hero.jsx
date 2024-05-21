import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-gradient-1 to-gradient-2 rounded-[70px] py-14"
    >
      <div className="flex justify-center font-lora">
        <h1 className="md:text-5xl text-4xl text-center text-color-2 font-semibold mb-4 md:w-11/12 w-10/12">
          Mari Bersama-sama, Lestarikan Nusantara Satu Langkah Demi
          Kesejahteraan Alam
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="md:text-base text-sm w-1/2 text-center p-2 md:w-3/4 text-color-2 leading-normal font-poppins mb-4">
          "TerraTasi" adalah sebuah platform daring yang bertujuan untuk
          mengedukasi dan menginspirasi masyarakat tentang pentingnya menjaga
          kebersihan lingkungan, terutama di tempat-tempat wisata di Nusantara
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <button>
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="text font-poppins font-medium">
            Lihat Selengkapnya
          </span>
        </button>
      </div>
      <div className="">
        <img src="" />
      </div>
    </section>
  );
};

export default Hero;
