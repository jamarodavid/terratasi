import React from "react";
import "../../styleee.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SimpleNavbar from "../../components/SimpleNavbar";
import {
  daurulang1,
  daurulang10,
  daurulang2,
  daurulang3,
  daurulang4,
  daurulang5,
  daurulang6,
  daurulang7,
  daurulang8,
  daurulang9,
} from "../../assets";
import Footer from "../../components/Footer";

const Galeri = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
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
    <>
      <div className="container">
        <SimpleNavbar />
        <section className="px-[4rem] py-36">
          <motion.p
            className="text-center font-poppins text-2xl text-color-1"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            G A L E R I
          </motion.p>
          <motion.p
            className="teks text-center font-lora text-4xl md:text-[2.5rem] font-bold text-color-1"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            Barang - Barang Daur Ulang <br /> Dari Limbah Sampah
          </motion.p>
          <br />
          <motion.div
            className="grid md:grid-cols-3 grid-cols-1 gap-2 text-center border-[5px] rounded-xl border-[#82DF85] p-12"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants} className="md:col-span-2">
              <img src={daurulang1} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src={daurulang2} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src={daurulang3} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src={daurulang4} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src={daurulang5} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src={daurulang6} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2">
              <img src={daurulang7} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-3">
              <img src={daurulang8} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2">
              <img src={daurulang9} className="gambar rounded-xl" alt="" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src={daurulang10} className="gambar rounded-xl" alt="" />
            </motion.div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Galeri;
