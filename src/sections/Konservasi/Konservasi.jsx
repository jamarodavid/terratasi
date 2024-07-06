import { Link } from "react-router-dom";
import {
	konservasi1,
	konservasi2,
	konservasi3,
	konservasi4,
	konservasi5,
	konservasi6,
	konservasi7,
	konservasi8,
	konservasi9,
} from "../../assets";
import TextContent from "../../components/TextContent";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Konservasi = () => {
	const controls = useAnimation();


	const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
	const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
	const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
	const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
	const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
	const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
	const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
	const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });
	const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: true });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.4,
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	useEffect(() => {
		if (inView1) controls.start("visible");
		if (inView2) controls.start("visible");
		if (inView3) controls.start("visible");
		if (inView4) controls.start("visible");
		if (inView5) controls.start("visible");
		if (inView6) controls.start("visible");
		if (inView7) controls.start("visible");
		if (inView8) controls.start("visible");
		if (inView9) controls.start("visible");
	}, [controls, inView1, inView2, inView3, inView4, inView5, inView6, inView7, inView8, inView9]);

	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#B7DF82"
					fillOpacity="1"
					d="M0,256L10.4,266.7C20.9,277,42,299,63,282.7C83.5,267,104,213,125,165.3C146.1,117,167,75,188,53.3C208.7,32,230,32,250,69.3C271.3,107,292,181,313,202.7C333.9,224,355,192,376,154.7C396.5,117,417,75,438,80C459.1,85,480,139,501,149.3C521.7,160,543,128,563,117.3C584.3,107,605,117,626,117.3C647,117,668,107,689,122.7C709.6,139,730,181,751,176C772.2,171,793,117,814,85.3C834.8,53,856,43,877,48C897.4,53,918,75,939,101.3C960,128,981,160,1002,170.7C1022.6,181,1043,171,1064,192C1085.2,213,1106,267,1127,266.7C1147.8,267,1169,213,1190,202.7C1210.4,192,1231,224,1252,229.3C1273,235,1294,213,1315,218.7C1335.7,224,1357,256,1377,224C1398.3,192,1419,96,1430,48L1440,0L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"
				></path>
			</svg>

			<div className="bg-gradient-1 p-20 text-color-2 font-poppins">
				<div className="flex justify-center items-center h-screen">
					<motion.h1
						className="uppercase font-semibold lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-center"
						ref={ref1}
						variants={containerVariants}
						initial="hidden"
						animate={controls}
					>
						Konservasi Hijau
					</motion.h1>
				</div>
				<div className="flex md:flex-row flex-col justify-center">
					<div className="relative">
						<div className="sticky top-0 min-h-screen overflow-hidden flex space-x-4 w-full">
							<div className="grid flex-shrink-0 grid-cols-1 gap-2">
								<motion.div ref={ref2} className="h-[367px] w-44 overflow-hidden" variants={itemVariants} initial="hidden" animate={inView2 ? "visible" : "hidden"}>
									<img
										src={konservasi1}
										className="h-full w-full object-cover object-center"
										alt="konservasi1"
									/>
								</motion.div>
								<motion.div ref={ref3} className="h-[367px] w-44 overflow-hidden" variants={itemVariants} initial="hidden" animate={inView3 ? "visible" : "hidden"}>
									<img
										src={konservasi2}
										className="h-full w-full object-cover object-center"
										alt="konservasi2"
									/>
								</motion.div>
								<motion.div ref={ref4} className="h-[367px] w-44 overflow-hidden" variants={itemVariants} initial="hidden" animate={inView4 ? "visible" : "hidden"}>
									<img
										src={konservasi3}
										className="h-full w-full object-cover object-center"
										alt="konservasi3"
									/>
								</motion.div>
							</div>
							<div className="grid flex-shrink-0 grid-cols-1 gap-4">
								<motion.div ref={ref5} className="h-[471px] w-72 overflow-hidden" variants={itemVariants} initial="hidden" animate={inView5 ? "visible" : "hidden"}>
									<img
										src={konservasi4}
										className="h-full w-full object-cover object-center"
										alt="konservasi4"
									/>
								</motion.div>
								<motion.div ref={ref6} className="h-[471px] w-72 overflow-hidden" variants={itemVariants} initial="hidden" animate={inView6 ? "visible" : "hidden"}>
									<img
										src={konservasi5}
										className="h-full w-full object-cover object-center"
										alt="konservasi5"
									/>
								</motion.div>
								<motion.div ref={ref7} className="h-[189px] w-72 overflow-hidden" variants={itemVariants} initial="hidden" animate={inView7 ? "visible" : "hidden"}>
									<img
										src={konservasi6}
										className="h-full w-full object-cover object-center"
										alt="konservasi6"
									/>
								</motion.div>
							</div>
							<div className="grid flex-shrink-0 grid-cols-1 gap-6">
								<motion.div ref={ref8} className="h-[367px] w-44 overflow-hidden" variants={itemVariants} initial="hidden" animate={inView8 ? "visible" : "hidden"}>
									<img
										src={konservasi7}
										className="h-full w-full object-cover object-center"
										alt="konservasi7"
									/>
								</motion.div>
								<motion.div ref={ref9} className="h-[367px] w-44 overflow-hidden" variants={itemVariants} initial="hidden" animate={inView9 ? "visible" : "hidden"}>
									<img
										src={konservasi8}
										className="h-full w-full object-cover object-center"
										alt="konservasi8"
									/>
								</motion.div>
								<motion.div className="h-[367px] w-44 overflow-hidden" variants={itemVariants} initial="hidden" animate={controls}>
									<img
										src={konservasi9}
										className="h-full w-full object-cover object-center"
										alt="konservasi9"
									/>
								</motion.div>
							</div>
						</div>
						<Link
							to={"/galeri"}
							className="absolute -bottom-16 font-semibold underline hover:no-underline"
						>
							Galeri Hasil Barang Daur Ulang
						</Link>
					</div>
					<div className="w-full lg:w-3/6 ps-5 max-md:mt-20">
						<TextContent />
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#B7DF82"
					fill-opacity="1"
					d="M0,288L16,272C32,256,64,224,96,181.3C128,139,160,85,192,96C224,107,256,181,288,181.3C320,181,352,107,384,106.7C416,107,448,181,480,208C512,235,544,213,576,218.7C608,224,640,256,672,256C704,256,736,224,768,208C800,192,832,192,864,202.7C896,213,928,235,960,213.3C992,192,1024,128,1056,90.7C1088,53,1120,43,1152,48C1184,53,1216,75,1248,90.7C1280,107,1312,117,1344,122.7C1376,128,1408,128,1424,128L1440,128L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
				></path>
			</svg>
		</>
	);
      
};

export default Konservasi;
