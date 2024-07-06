import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Collaborate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5zm0bah", "template_0obtvkn", form.current, {
        publicKey: "X3e9b30-BI60swSrc",
      })
      .then(
        () => {
          alert("Pesan berhasil dikirim");
        },
        (error) => {
          alert("Pesan gagal dikirim");
        }
      );
  };
  return (
    <>
      <div className="font-poppins">
        <div className="md:text-6xl text-5xl max-sm:text-4xl text-center font-semibold text-color-1 mb-32">
          <h1>Let's Collaborate Together</h1>
          <span>{"</>"}</span>
        </div>
        <div className="flex gap-10 max-md:flex-col justify-center items-center">
          <div className="w-1/2">
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
                />
              </label>
              <label className="form-control w-full mb-4">
                <div className="label">
                  <span className="label-text text-color-1">Pesan</span>
                </div>
                <textarea
                  class="textarea textarea-success"
                  placeholder="Masukan pesan anda di sini..."
                  required
                  name="message"
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-color-2 text-color-1 hover:underline font-bold py-4 px-16 rounded-full w-full"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-1/2 m-auto text-center">
            <h1 className="font-sixNine text-[150px] text-color-1">
              <span className="md:font-outline-md font-outline">6</span>9
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaborate;
