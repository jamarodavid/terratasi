// ChatBubble.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { terratasi } from "../assets";

const ChatBubble = () => {
  const { ref: startRef, inView: startInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: endRef, inView: endInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const messageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div>
      <br />
      <motion.div
        className="chat chat-start font-poppins"
        ref={startRef}
        initial="hidden"
        animate={startInView ? "visible" : "hidden"}
        variants={messageVariants}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="User avatar" src="./src/assets/img/user.png" />
          </div>
        </div>
        <div className="chat-header">User</div>
        <div className="chat-bubble text-color-1">
          Kita sudah tau kalo misalnya jumlah sampah selalu banyak, tapi kenapa masih diproduksi?
        </div>
        <div className="chat-footer opacity-50">13:55</div>
      </motion.div>
      <motion.div
        className="chat chat-end font-poppins"
        ref={endRef}
        initial="hidden"
        animate={endInView ? "visible" : "hidden"}
        variants={messageVariants}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Terratasi avatar" src={terratasi} />
          </div>
        </div>
        <div className="chat-header">Terratasi</div>
        <div className="chat-bubble text-color-1">
          Alasan utama produksi sampah masih terus berlangsung adalah karena pola konsumsi modern yang mengutamakan penggunaan produk sekali pakai dan barang-barang dengan umur pakai pendek, yang didorong oleh pertumbuhan populasi dan kepentingan ekonomi.
        </div>
        <div className="chat-footer opacity-50">Seen at 13:56</div>
      </motion.div>
      
    </div>
  );
};

export default ChatBubble;
