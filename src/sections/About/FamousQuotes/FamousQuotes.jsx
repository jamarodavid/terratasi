import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FamousQuotes = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="text-center bg-color-3 rounded-[50px] py-14 max-sm:px-6 sm:px-6 md:px-12 lg:px-[138px]"
      initial="hidden"
      animate={controls}
      variants={textVariants}
      ref={ref}
    >
      <h1 className="font-lora font-bold md:text-5xl max-md:text-4xl max-sm:text-xl leading-none">
        "Sesuatu yang dapat dilakukan satu orang dapat memberikan perubahan yang
        besar pada lingkungan."
      </h1>
      <div className="font-poppins mt-[68px]">
        <h4 className="text-3xl font-semibold max-sm:text-lg">Jane Goodall</h4>
        <p className="mt-2 max-sm:text-xs">Primatolog dan Antropolog Inggris</p>
      </div>
    </motion.div>
  );
};

export default FamousQuotes;
