import "./Hero.css";
import { hero1, hero2, hero3, hero4, hero5, hero6, hero7 } from "../../assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-gradient-1 to-gradient-2 rounded-[70px] max-md:rounded-none py-16"
    >
      <motion.div
        className="flex justify-center font-lora flex-col items-center gap-2"
        initial="hidden"
        animate={controls}
        variants={textVariants}
        ref={ref}
      >
        <motion.h1
          className="md:text-5xl text-4xl text-center font-lora text-color-2 font-semibold mb-4 md:w-11/12 w-10/12"
          variants={textVariants}
        >
          Mari Bersama-sama, Lestarikan Nusantara Satu Langkah Demi
          Kesejahteraan Alam
        </motion.h1>
        <motion.p
          className="md:text-base text-sm text-center text-color-2 leading-normal font-poppins mx-12 xl:mx-60 mb-3"
          variants={textVariants}
        >
          "TerraTasi" adalah sebuah platform daring yang bertujuan untuk
          mengedukasi dan menginspirasi masyarakat tentang pentingnya menjaga
          kebersihan lingkungan, terutama di tempat-tempat wisata di Nusantara
        </motion.p>
        <motion.div variants={textVariants}>
          <button>
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="text font-poppins font-medium">
              Lihat Selengkapnya
            </span>
          </button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-5 md:grid-cols-5 grid-rows-1 gap-3 items-end px-4 md:px-12 max-md:px-0">
        <motion.div
          className="flex flex-col gap-2 max-sm:gap-0"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          ref={ref}
        >
          <img
            src={hero1}
            className="md:mb-1 mb-2 w-full h-auto object-cover"
          />
          <img src={hero2} className="w-full h-auto object-cover" />
        </motion.div>
        <motion.img
          src={hero3}
          className="w-full h-auto object-cover"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          ref={ref}
        />
        <motion.img
          src={hero4}
          className="w-full h-auto object-cover"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          ref={ref}
        />
        <motion.img
          src={hero5}
          className="w-full h-auto object-cover"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          ref={ref}
        />
        <motion.div
          className="flex flex-col gap-2 max-sm:gap-0"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          ref={ref}
        >
          <img
            src={hero6}
            className="md:mb-1 mb-2 w-full h-auto object-cover"
          />
          <img src={hero7} className="w-full h-auto object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
