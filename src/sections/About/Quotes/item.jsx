import React from "react";
import { motion } from "framer-motion";

export const Item = ({ item }) => {
  return (
    <motion.div
      className="reorder-item" // Sesuaikan dengan kelas yang Anda gunakan
      whileHover={{ scale: 1.1 }} // Efek saat hover menggunakan Framer Motion
      whileTap={{ scale: 0.9 }} // Efek saat tap menggunakan Framer Motion
    >
      {item}
    </motion.div>
  );
};
