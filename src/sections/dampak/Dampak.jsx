import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {koran1, koran2, koran3} from "../../assets";
const Dampak = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const imgVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-11 ">
      <div className="flex flex-col md:flex-row gap-8" ref={ref}>
        <div className="flex flex-col items-center gap-3 pt-2 md:w-1/2 w-full">
          <motion.img
            src={koran1}
            className="w-full border-[3.5px] mr-4 border-color-1 rounded-2xl"
            alt="Koran 1"
            variants={imgVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={koran2}
            className="w-full ml-10 border-[3.5px] border-color-1 rounded-2xl"
            alt="Koran 2"
            variants={imgVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.img
            src={koran3}
            className="w-full border-[3.5px] mr-4 border-color-1 rounded-2xl"
            alt="Koran 3"
            variants={imgVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </div>
        <motion.div
          className="flex items-center font-semibold font-poppins text-color-1 w-full md:w-1/2"
          variants={textVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xs md:text-sm xl:text-base leading-relaxed">
            <motion.p
              className="text-xl md:text-2xl xl:text-3xl font-lora"
              variants={titleVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Apa dampak positif jika kita mendaur ulang sampah?
            </motion.p>
            <br />
            Daur ulang sampah bisa menghasilkan uang dan menarik minat
            masyarakat dengan menjual bahan daur ulang seperti kertas, plastik,
            dan logam ke industri yang membutuhkannya. Usaha daur ulang juga
            menciptakan peluang bisnis dan lapangan pekerjaan baru, seperti
            pengumpulan sampah dan pabrik daur ulang. Selain itu, program daur
            ulang meningkatkan kesadaran lingkungan dan partisipasi masyarakat,
            sambil memberikan manfaat ekonomi nyata.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dampak;
