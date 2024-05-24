import React from "react";
import { useNavigate } from "react-router-dom";

export default function TrashTypes() {
  const navigate = useNavigate();
  return (
    <div className="font-poppins">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-color-1">
        <div className="w-full mb-4 md:mb-0 grid grid-cols- md:grid-cols-1 gap-3">
          <div className="btn btn1 rounded-xl md:col-span-2">
            <div className="flex items-center my-11 justify-center">
              <h2 className="font-semibold text-[4rem]  text-center">
                Kenali 3 Jenis Sampah
              </h2>
            </div>
          </div>
          <div className="w-full mb-4 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() => navigate("/organik")}
              className="btn btn1 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <img
                  src="./src/assets/img/organik.png"
                  className="py-10"
                  alt=""
                />
              </div>
              <p className="font-semibold text-4xl text-center pb-5">
                {" "}
                Sampah <br /> Organik
              </p>
            </div>
            <div
              onClick={() => navigate("/anorganik")}
              className="btn btn1 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <img src="./src/assets/img/Anorganik.png" alt="" />
              </div>
              <p className="font-semibold text-4xl text-center">
                Sampah <br /> Anorganik
              </p>
            </div>
            <div
              onClick={() => navigate("/bahan")}
              className="btn btn1 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <img src="./src/assets/img/bahan.png" alt="" />
              </div>
              <p className="font-semibold text-4xl text-center">
                Bahan Berbahaya Dan Beracun (B3)
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
