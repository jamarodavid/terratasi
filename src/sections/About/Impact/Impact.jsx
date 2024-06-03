import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Impact = () => {
  const { ref, inView } = useInView();
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#B7DF82"
          fillOpacity="1"
          d="M0,224L13.3,213.3C26.7,203,53,181,80,176C106.7,171,133,181,160,197.3C186.7,213,213,235,240,218.7C266.7,203,293,149,320,112C346.7,75,373,53,400,42.7C426.7,32,453,32,480,80C506.7,128,533,224,560,266.7C586.7,309,613,299,640,256C666.7,213,693,139,720,101.3C746.7,64,773,64,800,74.7C826.7,85,853,107,880,112C906.7,117,933,107,960,106.7C986.7,107,1013,117,1040,101.3C1066.7,85,1093,43,1120,32C1146.7,21,1173,43,1200,42.7C1226.7,43,1253,21,1280,53.3C1306.7,85,1333,171,1360,176C1386.7,181,1413,107,1427,69.3L1440,32L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
        ></path>
      </svg>
      <div
        ref={ref}
        className="bg-gradient-1 lg:px-[120px] md:px-[70px] px-12 py-36 font-poppins text-center text-color-2"
        style={{ position: "relative" }}
      >
        <div className="container flex flex-col justify-center items-center">
          <motion.h1
            className="text-4xl font-semibold mb-4 w-full"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Dampak Dari Pembuangan Sampah Sembarangan
          </motion.h1>
          <motion.p
            className="text-base w-3/4 mb-4"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Indonesia memiliki kekayaan alam yang luar biasa, mulai dari pantai
            berpasir putih, hutan tropis yang rimbun, hingga gunung-gunung
            megah. Namun, sayangnya, keindahan ini sering kali terancam oleh
            masalah limbah sampah yang meningkat secara signifikan.
          </motion.p>

          <motion.div className="flex w-full justify-center">
            <iframe
              width="1125"
              height="571"
              src="https://www.youtube.com/embed/giv2GL8lp94?si=JJjuIUeo2NEjJUc0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="max-w-full h-[450px] w-[1125px] lg:h-[571px] rounded-2xl"
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            ></iframe>
          </motion.div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#B7DF82"
          fill-opacity="1"
          d="M0,224L20,208C40,192,80,160,120,160C160,160,200,192,240,197.3C280,203,320,181,360,144C400,107,440,53,480,69.3C520,85,560,171,600,218.7C640,267,680,277,720,240C760,203,800,117,840,90.7C880,64,920,96,960,96C1000,96,1040,64,1080,74.7C1120,85,1160,139,1200,186.7C1240,235,1280,277,1320,272C1360,267,1400,213,1420,186.7L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Impact;
