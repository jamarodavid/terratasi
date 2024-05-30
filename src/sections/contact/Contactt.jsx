import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { jamaro, radit } from "../../assets";

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
		<>
			<motion.p
				className="text-center  font-poppins text-2xl text-color-1"
				ref={ref}
				variants={containerVariants}
				initial="hidden"
				animate={controls}
			>
				C O N T A C T
			</motion.p>
      <br />
			<motion.div
				className="border-[5px] rounded-xl border-[#82DF85] p-12 "
				ref={ref}
				variants={containerVariants}
				initial="hidden"
				animate={controls}
			>
				<div className="flex flex-col md:flex-row  justify-center gap-4">
					<div>
						<motion.img
							src={jamaro}
							alt="Jamaro David Saragih"
							className="md:w-[50rem] object-center object-cover pt-2  h-full w-[16rem] rounded-2xl md:mx-0 mx-auto bg-[#82DF85] border-[3px] border-[#1D4735]"
              variants={itemVariants}
						/>
					</div>
					<motion.div className="bg-color-1  rounded-[1.62rem] border-[3px] p-3 xl:p-8 border-[#1D4735]" variants={itemVariants}>
						<p className="font-bold font-poppins text-[11px]  md:text-[10px] xl:text-[16px] text-color-3  ">
							Jamaro David Saragih
						</p>
						<p className="font-bold font-poppins text-[10px] text-color-3 md:text-[10px] xl:text-[16px]">
							(Team Leader)
						</p>
						<p className="font-semibold font-poppins text-[8px] md:text-[11px] xl:text-[15px] text-color-3 ">
							Saya Jamaro David Saragih, siswa SMKN 69 Jakarta, Jurusan SIJA
							(Sistem Informatika Jaringan Aplikasi). Saya memiliki antusiasme
							dalam teknologi informasi dan perangkat lunak. Menurut saya
							seseorang yang dapat mengembangkan berbagai aplikasi, website,
							atau solusi teknologi lainnya dapat memberikan dampak positif bagi
							masyarakat.
						</p>
						<div className="flex gap-5 pt-2">
							<a
								href="https://github.com/jamarodavid"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./src/assets/img/contact/github.png"
									alt=""
									className="w-[1.5rem]"
								/>
							</a>
							<a
								href="https://www.instagram.com/jmrodvd/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./src/assets/img/contact/instagram.png"
									alt=""
									className="w-[1.5rem]"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/jamaro-david-saragih-244975178/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./src/assets/img/contact/linkedn.png"
									alt=""
									className="w-[1.5rem]"
								/>
							</a>
						</div>
					</motion.div>
				</div>

				<br />

				<div className="flex flex-col md:flex-row  justify-center gap-4">
					<div>
						<motion.img 
							src={radit}
							alt="Raditya Ananda Rohman"
							className="md:w-[50rem] object-center object-cover pt-2 h-full w-[16rem] rounded-2xl md:mx-0 mx-auto bg-[#82DF85] border-[3px] border-[#1D4735]"
              variants={itemVariants}
						/>
					</div>
					<motion.div className="bg-color-1  rounded-[1.62rem] border-[3px] p-3 xl:p-5 border-[#1D4735]" variants={itemVariants}>
						<p className="font-bold font-poppins text-[11px]  md:text-[10px] xl:text-[16px] text-color-3  ">
							Raditya Ananda Rohman
						</p>
						<p className="font-bold font-poppins text-[10px] text-color-3 md:text-[10px] xl:text-[16px]">
							(Member)
						</p>
						<p className="font-semibold font-poppins text-[8px] md:text-[11px] xl:text-[15px] text-color-3 ">
							Saya Raditya Ananda Rohman siswa SMK Negeri 69 Jakarta jurusan
							SIJA (Sistem Informasi Jaringan dan Aplikasi). Sebagai seorang
							siswa yang memiliki minat dalam bidang Front-End Website
							Development. Bagi saya, menjadi seorang front end developer adalah
							tentang menciptakan pengalaman yang menarik dan interaktif bagi
							pengguna di berbagai platform.
						</p>
						<div className="flex gap-5 pt-2">
							<a
								href="https://github.com/RadityaRohman"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./src/assets/img/contact/github.png"
									alt=""
									className="w-[1.5rem]"
								/>
							</a>
							<a
								href="https://www.instagram.com/raditya26._/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./src/assets/img/contact/instagram.png"
									alt=""
									className="w-[1.5rem]"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/raditya-ananda-rohman-71b112262/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./src/assets/img/contact/linkedn.png"
									alt=""
									className="w-[1.5rem]"
								/>
							</a>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</>

	);
};

export default Contactt;
