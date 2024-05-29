import React from "react";
import { useNavigate } from "react-router-dom";
import SimpleNavbar from "../../../components/SimpleNavbar";
import Footer from "../../../components/Footer";

const OrganikPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SimpleNavbar />
      <section className="px-[4rem] py-24">
        <div className="">
          <div class="md:flex md:flex-row mt-12 ">
            <div class="md:w-3/6 flex flex-col justify-center font-semibold text-color-1 text-center md:text-left items-center ">
              <h1 className="text-[2rem] md:text-[3rem] font-lora font-bold  md:text-left text-center">
                Bahan Berbahaya <br /> Dan Beracun (B3)
              </h1>
            </div>
            <div class="md:w-2/5">
              <img
                src="./src/assets/img/bahan2.png"
                class="w-full mt-2  hover:shadow-[12px_12px_0_0_#82DF85] rounded-[25px] transition-shadow"
                alt=""
              />
            </div>
          </div>
          <p className="text-center font-poppins md:px-10 pt-7 md:text-2xl text-sm text-color-1 font-semibold">
            Sampah B3 mengacu pada bahan-bahan kimia atau zat-zat yang memiliki
            potensi bahaya terhadap kesehatan manusia dan lingkungan jika tidak
            ditangani dengan benar. Ini termasuk limbah industri berbahaya
            seperti pestisida, baterai, lampu neon, obat-obatan kadaluwarsa, dan
            limbah medis. Sampah B3 memerlukan penanganan khusus dan pembuangan
            yang aman sesuai dengan peraturan yang berlaku untuk mencegah dampak
            negatifnya terhadap kesehatan dan lingkungan.
          </p>
        </div>
        <p className="pt-11 text-color-1 font-semibold font-lora text-4xl">
          Baca Lainnya
        </p>
        <div className="grid py-11 md:grid-cols-2 grid-cols-1 gap-11 ">
          <div
            onClick={() => navigate("/anorganik")}
            className="p-2 cursor-pointer border-[5px] rounded-2xl border-[#82DF85] "
          >
            <div>
              <img
                src="./src/assets/img/anorganik2.png"
                class="w-full mt-2 rounded-[20px] "
                alt=""
              />
            </div>
            <p className="text-center text-color-1 font-semibold font-lora text-4xl">
              Sampah Anorganik
            </p>
          </div>
          <div
            onClick={() => navigate("/organik")}
            className="p-2 cursor-pointer border-[5px] rounded-2xl border-[#82DF85] "
          >
            <div>
              <img
                src="./src/assets/img/organik2.png"
                class="w-full mt-2  rounded-[20px] "
                alt=""
              />
            </div>
            <p className="text-center text-color-1 font-semibold font-lora text-4xl">
              Sampah Organik
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrganikPage;
