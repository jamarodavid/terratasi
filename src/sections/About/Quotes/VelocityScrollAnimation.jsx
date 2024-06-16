import React from "react";
import { motion, useScroll } from "framer-motion";

const VelocityScrollAnimation = () => {
  const { scrollY } = useScroll();

  // Contoh transform: ubah opacity berdasarkan posisi scroll
  const opacity = scrollY.interpolate([0, 200], [1, 0]);

  return (
    <div style={{ height: "200vh", paddingTop: "100vh" }}>
      <motion.div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "blue",
          opacity: opacity,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "3rem",
          fontWeight: "bold",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        Scroll down to see the effect!
      </motion.div>
      <div style={{ height: "200vh" }} />
    </div>
  );
};

export default VelocityScrollAnimation;
