import { navigation } from "../constants";
import { terratasi } from "../assets";

import { useLocation } from "react-router-dom";

const Header = () => {
  const pathName = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="flex items-center gap-5">
          <img src={terratasi} alt="Terratasi" width={25} height={25} />
          <span className="font-semibold text-2xl">TerraTasi</span>
        </a>
        <nav className="hiddden fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl lg:text-lg transition-colors hover:text-color-1
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
