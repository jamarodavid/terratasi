import { useEffect, useState } from "react";
import { terratasi } from "../assets";

const SimpleNavbar = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleColor = () => {
      if (window.scrollY >= 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleColor);

    return () => {
      window.removeEventListener("scroll", handleColor);
    };
  }, []);
  return (
    <nav
      className={`font-poppins z-50 top-0 start-0 fixed w-full border-gray-600 backdrop-blur-lg border-b`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={terratasi} alt="Logo" width={20} height={20} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-color-1">
            TerraTasi
          </span>
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a
              href="/"
              className={`${
                navBg ? "text-white" : "text-color-slate-gray"
              } hover:text-white`}
            >
              Kembali
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
