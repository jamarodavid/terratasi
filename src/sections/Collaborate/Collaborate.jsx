import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Collaborate = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5zm0bah", "template_0obtvkn", form.current, {
        publicKey: "X3e9b30-BI60swSrc",
      })
      .then(
        () => {
          toast.success("Pesan Berhasil Dikirim");
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        },
        (error) => {
          toast.error("Pesan Gagal Dikirim");
        }
      );
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start("visible");
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  return (
    <div className="font-poppins">
      <div className="md:text-6xl text-3xl sm:text-5xl text-center font-semibold text-color-1 mb-8">
        <h1>Let's Collaborate Together</h1>
        <span>{"</>"}</span>
      </div>
      <div className="flex gap-10 flex-col md:flex-row justify-center items-center">
        <motion.div
          className="w-full md:w-1/2 p-4"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <form ref={form} onSubmit={sendEmail}>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-color-1">Nama</span>
              </div>
              <input
                type="text"
                placeholder="Masukan nama anda di sini..."
                className="input input-bordered w-full input-success"
                required
                name="user_name"
                ref={nameRef}
              />
            </label>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-color-1">Email</span>
              </div>
              <input
                type="email"
                placeholder="Masukan email anda di sini..."
                className="input input-bordered w-full input-success"
                required
                name="user_email"
                ref={emailRef}
              />
            </label>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-color-1">Pesan</span>
              </div>
              <textarea
                className="textarea textarea-success w-full"
                placeholder="Masukan pesan anda di sini..."
                required
                name="message"
                ref={messageRef}
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-color-2 hover:bg-color-2/80 text-color-1 hover:underline font-bold py-4 px-16 rounded-full w-full"
            >
              Submit
            </button>
          </form>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex justify-center p-4"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <h1 className="font-sixNine md:text-[150px] text-8xl text-color-1 text-center">
            <span className="md:font-outline-md font-outline">6</span>9
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Collaborate;
