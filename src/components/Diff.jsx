import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Diff = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  return (
    <div className="py-24">
      <br />
      <div className="flex justify-center items-center">
      <div className="diff aspect-[16/9] w-[51rem] rounded-2xl">
        <motion.div
          ref={ref1}
          className="diff-item-1"
          initial={{ opacity: 0, y: -50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="bg-color-1 md:text-2xl text-center text-xl text-color-3 font-black font-lora grid place-content-center">
            "Bumi bukan milik kita: kita milik Bumi"
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          className="diff-item-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="bg-base-200 md:text-2xl text-center text-xl text-color-1 font-black font-lora grid place-content-center">
            "Bumi ini milik kita, kita bisa melakukan apa saja yang kita mau"
          </div>
        </motion.div>
        <div className="diff-resizer"></div>
      </div>
      </div>
      <br />
      <div className="tooltip flex justify-center" data-tip=":)">
        <motion.button
          className="btn text-color-1 font-poppins"
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          Terratasi
        </motion.button>
      </div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 2 }}
        className="flex justify-center py-9"
      >
        <label className="swap swap-flip text-[5rem] md:text-[11rem]">
          <input type="checkbox" />
          <div className="swap-on">🚯</div>
          <div className="swap-off">🗑️</div>
        </label>
        <label className="swap swap-flip text-[5rem] md:text-[11rem]">
          <input type="checkbox" />
          <div className="swap-on">♻️</div>
          <div className="swap-off">🚮</div>
        </label>
        <label className="swap swap-flip text-[5rem] md:text-[11rem]">
          <input type="checkbox" />
          <div className="swap-on">🌱</div>
          <div className="swap-off">🌳</div>
        </label>
      </motion.div>
    </div>
  );
};

export default Diff;
