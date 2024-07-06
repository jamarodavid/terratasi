import React from "react";
import { useNavigate } from "react-router-dom";
import SimpleNavbar from "../../../components/SimpleNavbar";
import Footer from "../../../components/Footer";
import { anorganik2, organik2 ,bahan2 } from "../../../assets";

const OrganikPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SimpleNavbar />
      <section className="px-[4rem] py-24">
        <div className="">
          <div class="md:flex md:flex-row mt-12 ">
            <div class="md:w-3/6 flex flex-col justify-center font-semibold text-color-1 text-center md:text-left items-center ">
              <h1 className="text-[4rem] font-lora font-bold  md:text-left text-center">
                Sampah <br /> Anorganik
              </h1>
            </div>
            <div class="md:w-2/5">
              <img
                src={anorganik2}
                class="w-full mt-2  hover:shadow-[12px_12px_0_0_#82DF85] rounded-[25px] transition-shadow"
                alt=""
              />
            </div>
          </div>
          <p className="text-center font-poppins md:px-10 pt-7 md:text-2xl text-sm text-color-1 font-semibold">
            Sampah Anorganik terdiri dari bahan-bahan yang tidak mudah terurai
            secara alami, seperti plastik, kaca, logam, dan kertas yang tidak
            terkontaminasi dengan bahan organik. Sampah anorganik sering kali
            merupakan hasil dari aktivitas manusia dalam kehidupan sehari-hari,
            seperti kemasan produk, botol minuman, kaleng, dan barang-barang
            konsumen lainnya. Daur ulang adalah salah satu pendekatan yang umum
            digunakan untuk mengelola sampah anorganik dengan memproses kembali
            bahan-bahan tersebut untuk mengurangi penggunaan bahan baku baru dan
            mengurangi jumlah sampah yang masuk ke tempat pembuangan sampah.
          </p>
        </div>
        <p className="pt-11 text-color-1 font-semibold font-lora text-4xl">
          Baca Lainnya
        </p>
        <div className="grid py-11 md:grid-cols-2 grid-cols-1 gap-11 ">
          <div
            onClick={() => navigate("/organik")}
            className="p-2 border-[5px] rounded-2xl border-[#82DF85] cursor-pointer "
          >
            <div>
              <img
                src={organik2}
                class="w-full mt-2 rounded-[20px] "
                alt=""
              />
            </div>
            <p className="text-center text-color-1 font-semibold font-lora text-4xl">
              Sampah Organik
            </p>
          </div>
          <div
            onClick={() => navigate("/bahan")}
            className="p-2 border-[5px] rounded-2xl border-[#82DF85] cursor-pointer "
          >
            <div>
              <img
                src={bahan2}
                class="w-full mt-2  rounded-[20px] "
                alt=""
              />
            </div>
            <p className="text-center text-color-1 font-semibold font-lora text-3xl">
              Bahan Berbahaya Dan <br />
              Beracun (B3)
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrganikPage;
