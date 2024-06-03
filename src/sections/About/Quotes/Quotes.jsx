import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Quotes = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="flex justify-center md:flex-row flex-col items-center md:gap-10 gap-5 text-color-1"
      id="about"
    >
      <motion.h1
        className="font-lora font-bold text-4xl md:w-2/4 w-full max-md:text-center"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        "Satu Langkah Kecil Untuk Satu Perubahan Besar"
      </motion.h1>
      <motion.p
        className="font-poppins md:w-2/4 w-full max-md:text-center"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        Kami percaya bahwa jika langkah kecil yang dilakukan secara konsisten
        bisa membawa sebuah perubahan besar.
        <br />
        <br />
        Sama halnya dengan sampah, jika masyarakat sedikit demi sedikit bisa
        sadar untuk mengurangi dan mengelola sampah, maka kebersihan lingkungan
        pasti terjaga.
      </motion.p>
    </section>
  );
};

export default Quotes;
