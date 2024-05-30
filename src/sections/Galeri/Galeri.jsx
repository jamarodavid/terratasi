import React from "react";
import "../../styleee.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SimpleNavbar from "../../components/SimpleNavbar";

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
            <img
              src="./src/assets/img/daurulang1.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src="./src/assets/img/daurulang2.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src="./src/assets/img/daurulang3.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src="./src/assets/img/daurulang4.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src="./src/assets/img/daurulang5.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src="./src/assets/img/daurulang6.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2">
            <img
              src="./src/assets/img/daurulang7.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-3">
            <img
              src="./src/assets/img/daurulang8.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2">
            <img
              src="./src/assets/img/daurulang9.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src="./src/assets/img/daurulang10.png"
              className="gambar rounded-xl"
              alt=""
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Galeri;
