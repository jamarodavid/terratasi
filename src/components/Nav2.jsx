import { terratasi } from "../assets";
import { useNavigate } from 'react-router-dom'; 

const   Nav = () => {
  const navigate = useNavigate();
  return (
    <header className="py-8 padding-x absolute z-10 w-full border-b-2 border-color-slate-gray">
      <div className="flex justify-between"> 
        <nav className="flex gap-3">
          <img src={terratasi} alt="Logo" width={20} height={20} />
          <h3 className="text-xl font-semibold font-poppins text-green-600">
            Terratasi
          </h3>
          
        </nav>
        <a onClick={() => navigate('/')} className=" cursor-pointer text-color-1 font-semibold text-xl">Kembali</a> 
      </div>
    </header>
  );
};

export default Nav;
