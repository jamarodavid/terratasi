// LeafDrawing.jsx
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LeafDrawing = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const leafVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  const veinsVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
      <div ref={ref} className="mx-auto">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Leaf outline */}
          <motion.path
            d="M200,20 C100,100 50,200 100,300 C150,400 250,400 300,300 C350,200 300,100 200,20 Z"
            stroke="#82DF85"
            strokeWidth="5"
            fill="transparent"
            variants={leafVariants}
            initial="hidden"
            animate={controls}
          />
          {/* Leaf veins */}
          <motion.path
            d="M200,20 L200,300"
            stroke="#82DF85"
            strokeWidth="3"
            fill="transparent"
            variants={veinsVariants}
            initial="hidden"
            animate={controls}
          />
          <motion.path
            d="M200,100 C150,150 150,250 200,300"
            stroke="#82DF85"
            strokeWidth="3"
            fill="transparent"
            variants={veinsVariants}
            initial="hidden"
            animate={controls}
          />
          <motion.path
            d="M200,100 C250,150 250,250 200,300"
            stroke="#82DF85"
            strokeWidth="3"
            fill="transparent"
            variants={veinsVariants}
            initial="hidden"
            animate={controls}
          />
          <motion.path
            d="M200,150 C180,180 180,220 200,250"
            stroke="#82DF85"
            strokeWidth="3"
            fill="transparent"
            variants={veinsVariants}
            initial="hidden"
            animate={controls}
          />
          <motion.path
            d="M200,150 C220,180 220,220 200,250"
            stroke="#82DF85"
            strokeWidth="3"
            fill="transparent"
            variants={veinsVariants}
            initial="hidden"
            animate={controls}
          />
        </svg>
      </div>
      <motion.p 
        className="text-center font-poppins text-4xl text-color-1"
        initial="hidden"
        animate={controls}
        variants={veinsVariants}
      >
        "Alam bukanlah tempat untuk dikunjungi. <br /> Itu adalah rumah."
      </motion.p>
    </div>
  );
};

export default LeafDrawing;
