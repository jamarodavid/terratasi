import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contactt = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
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
    <p>Contact</p>
    // <div>
    //   <section>
    //     <motion.p
    //       className="text-center  font-poppins text-2xl text-color-1"
    //       ref={ref}
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate={controls}
    //     >
    //       C O N T A C T
    //     </motion.p>
    //     <br />
    //     <motion.div
    //       className="border-[5px] rounded-xl border-[#82DF85] p-12 "
    //       ref={ref}
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate={controls}
    //     >
    //       <div class="flex flex-col md:flex-row items-center justify-center md:justify-around">
    //         <motion.div class="md:w-2/6 md:mb-0 " variants={itemVariants}>
    //           <img
    //             src="./src/assets/img/contact/kontak.png"
    //             class="w-[16rem] bg-[#82DF85] border-[3px] border-[#1D4735] xl:w-[20rem]  rounded-3xl"
    //             alt="Gambar"
    //           />
    //         </motion.div>
    //         <motion.div class="md:w-4/6" variants={itemVariants}>
    //           <div className="bg-[#82DF85]  rounded-[1.62rem] border-[3px] p-8 xl:p-11 border-[#1D4735]">
    //             <p className="font-bold font-poppins text-[15px] md:text-[18px] text-color-3  ">
    //               Jamaro David Saragih
    //             </p>
    //             <p className="font-bold font-poppins text-[12px] text-color-3 md:text-[15px]   ">
    //               (Team Leader)
    //             </p>

    //             <p className="font-semibold font-poppins text-[10px] md:text-[10px] xl:text-[18px] text-color-3 ">
    //               Saya Jamaro David Saragih, siswa SMKN 69 Jakarta, Jurusan SIJA
    //               (Sistem Informatika Jaringan Aplikasi). Saya memiliki
    //               antusiasme dalam teknologi informasi dan perangkat lunak.
    //               Menurut saya seseorang yang dapat mengembangkan berbagai
    //               aplikasi, website, atau solusi teknologi lainnya dapat
    //               memberikan dampak positif bagi masyarakat.
    //             </p>
    //             <div className="flex gap-5 pt-2">
    //               <a
    //                 href="https://github.com/jamarodavid"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <img
    //                   src="./src/assets/img/contact/github.png"
    //                   alt=""
    //                   className="w-[1.5rem]"
    //                 />
    //               </a>
    //               <a
    //                 href="https://www.instagram.com/jmrodvd/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <img
    //                   src="./src/assets/img/contact/instagram.png"
    //                   alt=""
    //                   className="w-[1.5rem]"
    //                 />
    //               </a>
    //               <a
    //                 href="https://www.linkedin.com/in/jamaro-david-saragih-244975178/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <img
    //                   src="./src/assets/img/contact/linkedn.png"
    //                   alt=""
    //                   className="w-[1.5rem]"
    //                 />
    //               </a>
    //             </div>
    //           </div>
    //         </motion.div>
    //       </div>
    //       <br />
    //       <div class="flex flex-col md:flex-row items-center justify-center md:justify-around">
    //         <motion.div class="md:w-2/6 md:mb-0 " variants={itemVariants}>
    //           <img
    //             src="./src/assets/img/contact/kontakk.png"
    //             class="w-[16rem] bg-[#82DF85] border-[3px] border-[#1D4735] xl:w-[20rem]  rounded-3xl"
    //             alt="Gambar"
    //           />
    //         </motion.div>
    //         <div class="md:w-4/6">
    //           <motion.div
    //             className="bg-[#82DF85]  rounded-[1.62rem] border-[3px] p-8 xl:p-11 border-[#1D4735]"
    //             variants={itemVariants}
    //           >
    //             <p className="font-bold font-poppins text-[15px] md:text-[18px] text-color-3  ">
    //               Raditya Ananda Rohman
    //             </p>
    //             <p className="font-bold font-poppins text-[12px] text-color-3 md:text-[15px]   ">
    //               (Member)
    //             </p>

    //             <p className="font-semibold font-poppins text-[10px] md:text-[10px] xl:text-[18px] text-color-3 ">
    //               Saya Raditya Ananda Rohman siswa SMK Negeri 69 Jakarta jurusan
    //               SIJA (Sistem Informasi Jaringan dan Aplikasi). Sebagai seorang
    //               siswa yang memiliki minat dalam bidang Front-End Website
    //               Development. Bagi saya, menjadi seorang front end developer
    //               adalah tentang menciptakan pengalaman yang menarik dan
    //               interaktif bagi pengguna di berbagai platform.
    //             </p>
    //             <div className="flex gap-5 pt-2">
    //               <a
    //                 href="https://github.com/RadityaRohman"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <img
    //                   src="./src/assets/img/contact/github.png"
    //                   alt=""
    //                   className="w-[1.5rem]"
    //                 />
    //               </a>
    //               <a
    //                 href="https://www.instagram.com/raditya26._/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <img
    //                   src="./src/assets/img/contact/instagram.png"
    //                   alt=""
    //                   className="w-[1.5rem]"
    //                 />
    //               </a>
    //               <a
    //                 href="https://www.linkedin.com/in/raditya-ananda-rohman-71b112262/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <img
    //                   src="./src/assets/img/contact/linkedn.png"
    //                   alt=""
    //                   className="w-[1.5rem]"
    //                 />
    //               </a>
    //             </div>
    //           </motion.div>
    //         </div>
    //       </div>
    //     </motion.div>
    //     <motion.p
    //       className="font-semibold md:text-4xl font-poppins text-2xl text-center pt-11 text-color-1"
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate={controls}
    //     >
    //       Let's collaborate together
    //     </motion.p>
    //   </section>
    //   <div className="flex flex-col md:flex-row items-center  justify-center md:justify-around">
    //     <div className="">
    //       <div class="form-control w-full max-w-xs">
    //         <label class="label">
    //           <span class="label-text text-color-1">Nama</span>
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Masukan Nama Anda"
    //           class="input input-bordered input-success w-full max-w-xs"
    //         />
    //       </div>
    //       <div class="form-control w-full max-w-xs">
    //         <label class="label">
    //           <span class="label-text text-color-1">Email</span>
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Masukan email"
    //           class="input input-bordered input-success w-[50rem] max-w-xs"
    //         />
    //       </div>
    //       <div class="form-control w-full max-w-xs mb-4">
    //         <label class="label">
    //           <span class="label-text text-color-1">Pesan</span>
    //         </label>
    //         <textarea
    //           class="textarea textarea-bordered textarea-success max-w-xs"
    //           placeholder="Masukan Pesan Anda"
    //         ></textarea>
    //       </div>
    //       <button class="btn btn-outline btn-success">Submit</button>
    //     </div>
    //     <img src="" alt="" />
    //   </div>
    // </div>
  );
};

export default Contactt;
