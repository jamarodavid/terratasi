import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Dampakk = () => {
  // Gunakan useInView untuk mendeteksi kapan elemen muncul dalam viewport
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

  // Konfigurasi animasi untuk efek scale saat elemen masuk viewport
  const variants = {
    visible: { scale: 1, transition: { duration: 0.5 } },
    hidden: { scale: 0 }
  };

  return (
    <>
      <br />
      <p className="text-center font-poppins text-2xl text-color-1">
        Dampak Negatif Pencemaran Lingkungan
      </p>
      <br />

      <div className="md:flex">
        <motion.div
          ref={ref1}
          className="bg-color-1 rounded-lg p-4 m-4 md:w-1/2 lg:w-3/5"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-color-2 text-2xl font-bold mb-2">Kesehatan Manusia:</h2>
          <p className="text-color-2 text-xl">
            Pencemaran udara, air, dan tanah dapat menyebabkan berbagai penyakit, termasuk penyakit pernapasan, kardiovaskular, dan kanker.
          </p>
        </motion.div>
        <motion.div
          ref={ref2}
          className="bg-color-1 rounded-lg p-4 m-4 md:w-1/2 lg:w-2/5"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-color-2 text-2xl font-bold mb-2">Kerusakan Ekosistem:</h2>
          <p className="text-color-2 text-xl">
            Pencemaran dapat merusak habitat alami, mengurangi keanekaragaman hayati, dan mengganggu keseimbangan ekosistem.
          </p>
        </motion.div>
      </div>

      <div className="md:flex">
        <motion.div
          ref={ref3}
          className="bg-color-1 rounded-lg p-4 m-4 md:w-1/2 lg:w-2/5"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={variants}
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-color-2 text-2xl font-bold mb-2">Penurunan Kualitas Air:</h2>
          <p className="text-color-2 text-xl">
            Pencemaran air dapat mencemari sumber air minum, menyebabkan krisis air bersih, dan membahayakan kehidupan akuatik.
          </p>
        </motion.div>
        <motion.div
          ref={ref4}
          className="bg-color-1 rounded-lg p-4 m-4 md:w-1/2 lg:w-3/5"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={variants}
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-color-2 text-2xl font-bold mb-2">Perubahan Iklim:</h2>
          <p className="text-color-2 text-xl">
            Emisi gas rumah kaca dari pencemaran udara berkontribusi pada pemanasan global dan perubahan iklim, yang menyebabkan fenomena cuaca ekstrem.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Dampakk;
