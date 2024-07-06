import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { anorganik, organik ,bahan } from "../../../assets";

export default function TrashTypes() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-poppins">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:justify-between text-color-1"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
      >
        <div className="w-full mb-4 md:mb-0 grid grid-cols-1 md:grid-cols-1">
          <motion.div
            className="trash-type-btn btn1 rounded-xl md:col-span-2 mb-3"
            variants={itemVariants}
          >
            <div className="flex items-center my-11 justify-center">
              <h2 className="font-semibold md:text-[4rem] text-2xl text-center leading-none">
                Kenali 3 Jenis Sampah
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="w-full mb-4 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            <motion.div
              onClick={() => navigate("/organik")}
              className="trash-type-btn btn1 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={organik}
                  className="py-10"
                  alt="Sampah Organik"
                />
              </div>
              <p className="font-semibold md:text-3xl text-2xl text-center pb-5">
                Sampah <br /> Organik
              </p>
            </motion.div>
            <motion.div
              onClick={() => navigate("/anorganik")}
              className="trash-type-btn btn1 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={anorganik}
                  alt="Sampah Anorganik"
                  className="w-[5/6] h-auto"
                />
              </div>
              <p className="font-semibold md:text-3xl text-2xl text-center">
                Sampah <br /> Anorganik
              </p>
            </motion.div>
            <motion.div
              onClick={() => navigate("/bahan")}
              className="trash-type-btn btn1 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center">
                <img src={bahan} alt="" />
              </div>
              <p className="font-semibold md:text-3xl text-xl text-center">
                Bahan Berbahaya Dan Beracun (B3)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
