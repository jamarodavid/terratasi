import { navigation } from "../constants";
import { terratasi } from "../assets";

const Nav = () => {
  return (
    <header className="py-8 padding-x absolute z-10 w-full border-b-2 border-color-slate-gray ">
      <nav className="flex justify-center items-center">
        <a href="/" className="flex items-center gap-5">
          <img src={terratasi} alt="Logo" width={20} height={20} />
          <h3 className="text-xl font-semibold font-poppins text-green-600">
            Terratasi
          </h3>
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-md:hidden">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className={`leading text-lg text-color-slate-gray font-poppins lg:hover:text-white`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
