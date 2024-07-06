import { terratasi } from "../assets";

const Footer = () => {
  return (
    <div className="font-poppins">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#B7DF82"
          fill-opacity="1"
          d="M0,224L13.3,213.3C26.7,203,53,181,80,176C106.7,171,133,181,160,197.3C186.7,213,213,235,240,218.7C266.7,203,293,149,320,112C346.7,75,373,53,400,42.7C426.7,32,453,32,480,80C506.7,128,533,224,560,266.7C586.7,309,613,299,640,256C666.7,213,693,139,720,101.3C746.7,64,773,64,800,74.7C826.7,85,853,107,880,112C906.7,117,933,107,960,106.7C986.7,107,1013,117,1040,101.3C1066.7,85,1093,43,1120,32C1146.7,21,1173,43,1200,42.7C1226.7,43,1253,21,1280,53.3C1306.7,85,1333,171,1360,176C1386.7,181,1413,107,1427,69.3L1440,32L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
        ></path>
      </svg>
      {/* <div className="flex flex-col justify-center items-center bg-gradient-1 lg:px-[120px] md:px-[70px] px-12 py-36 font-poppins text-center text-color-2">
        
      </div> */}

      <footer class="bg-gradient-1">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <img src={terratasi} class="h-8 me-3" alt="Terratasi Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
                  TerraTasi
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-black">Links</h2>
                <ul class="text-black font-medium">
                  <li class="mb-4">
                    <a href="#hero" class="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#about" class="hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#konservasi" class="hover:underline">
                      Konservasi
                    </a>
                  </li>
                  <li>
                    <a href="#contact" class="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-center">
            <span class="text-sm text-black">
              © 2024{" "}
              <a href="/" class="hover:underline">
                TerraTasi
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
