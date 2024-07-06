import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const { ref: refTabContent, inView: inViewTabContent } = useInView({ triggerOnce: true });

  return (
    <>
      <p className="flex justify-center text-center text-3xl font-poppins font-semibold text-color-1">
        3 Kota Paling Banyak Sampah di Indonesia
      </p>
      <div className="w-full flex flex-col items-center mt-4 font-poppins">
        <div className="tabs mb-4">
          <a
            className={`tab tab-lifted ${activeTab === 0 ? "tab-active text-xl text-color-1" : " "}`}
            onClick={() => handleTabClick(0)}
          >
            Jakarta
          </a>
          <a
            className={`tab tab-lifted ${activeTab === 1 ? "tab-active text-xl text-color-1" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Bali
          </a>
          <a
            className={`tab tab-lifted ${activeTab === 2 ? "tab-active text-xl text-color-1" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Surabaya
          </a>
        </div>

        <motion.div
          ref={refTabContent}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewTabContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
          className="w-full px-4 py-6 bg-base-100 shadow-lg shadow-[#82DF85] rounded-box"
        >
          {activeTab === 0 && (
            <div>
              <h2 className="text-4xl font-bold text-color-1 flex justify-center">Jakarta</h2>
              <br />
              <div className="md:flex items-center gap-4">
                <img src="./src/assets/img/Tabs1.jpeg" className="rounded-xl mx-auto" alt="" />
                <br />
                <p className="text-color-1 md:text-left text-sm xl:text-lg md:text-md text-center">
                  Jakarta, sebagai ibu kota Indonesia, menghadapi masalah besar terkait sampah. Dari sampah rumah tangga hingga limbah industri, Jakarta menghasilkan jumlah sampah yang sangat besar setiap harinya. Pencemaran sungai dan saluran air oleh sampah plastik sering kali menjadi permasalahan yang signifikan di kota ini.
                </p>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h2 className="text-4xl font-bold text-color-1 flex justify-center">Bali</h2>
              <br />
              <div className="md:flex items-center gap-4">
                <img src="./src/assets/img/Tabs2.jpeg" className="rounded-xl w-[25rem] mx-auto" alt="" />
                <br />
                <p className="text-color-1 md:text-left text-sm xl:text-lg md:text-md text-center">
                  Bali, terutama daerah wisata seperti Kuta, Seminyak, dan sekitarnya, sering kali menghadapi masalah sampah yang cukup parah. Wisata yang tinggi berkontribusi terhadap meningkatnya volume sampah plastik dan organik di pulau ini. Meskipun langkah-langkah telah diambil untuk mengatasi masalah ini, pengelolaan sampah yang efektif masih menjadi tantangan.
                </p>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h2 className="text-4xl font-bold text-color-1 flex justify-center">Surabaya</h2>
              <br />
              <div className="md:flex items-center gap-4">
                <img src="./src/assets/img/Tabs3.jpeg" className="rounded-xl w-[25rem] mx-auto" alt="" />
                <br />
                <p className="text-color-1 md:text-left text-sm xl:text-lg md:text-md text-center">
                  Surabaya, sebagai kota terbesar kedua di Indonesia, juga menghadapi masalah serius terkait sampah. Program seperti "Surabaya Bersih" yang diperkenalkan oleh mantan Wali Kota Surabaya, Ibu Risma, telah mencoba untuk mengurangi dan mengelola sampah dengan lebih baik. Namun, tingkat produksi sampah yang tinggi tetap menjadi isu yang perlu diatasi secara berkelanjutan.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Tabs;
