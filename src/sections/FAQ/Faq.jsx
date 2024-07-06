import React from "react";
import { faq } from "../../assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Dampak from "../dampak/Dampak";
import Dampakk from "../dampak/Dampakk";

const Faq = () => {
  return (
    <div className="font-poppins">
      <div className="text-center text-color-1">
        <p className="tracking-[5px] font-semibold">FAQ</p>
        <div className="sm:text-3xl md:text-4xl lg:text-5xl max-sm:text-xl text-3xl uppercase">
          <h1 className="italic">Kamu punya pertanyaan?</h1>
          <div className="flex justify-center gap-10 max-md:gap-3 max-sm:gap-2 md:gap-5 sm:mt-2">
            <h1 className="flex gap-4 sm:mt-3 mt-1 md:text-3xl">
              <span className="tracking-[-0.8rem] max-md:hidden">--</span>
              Kami Punya
            </h1>
            <img
              src={faq}
              alt="Message Icon"
              className="max-md:w-16 max-sm:w-8"
            />
            <h1 className="sm:mt-3 mt-1 md:text-3xl">Jawabannya!</h1>
          </div>
        </div>
        <span className="block outline-2 outline-dotted outline-[#636363] mt-10"></span>
      </div>
      <div className="flex max-md:flex-col max-md:px-12 w-full mt-24">
        <div className="w-2/6 max-md:w-full max-md:ms-4">
          <h1 className="font-medium">Pertanyaan</h1>
        </div>
        <div className="w-4/6 max-md:w-full">
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Seberapa penting menjaga lingkungan?
            </div>
            <div className="collapse-content">
              <ul className="list-decimal ps-4">
                <li>
                  Kesehatan Manusia: Mengurangi polusi untuk mencegah penyakit.
                </li>
                <li>
                  Keanekaragaman Hayati: Melindungi habitat hewan dan tumbuhan.
                </li>
                <li>
                  Sumber Daya Alam: Menjamin ketersediaan air bersih dan tanah
                  subur.
                </li>
                <li>
                  Perubahan Iklim: Mengurangi emisi gas rumah kaca untuk
                  mencegah bencana iklim.
                </li>
                <li>
                  Keberlanjutan Ekonomi: Mendukung industri yang bergantung pada
                  sumber daya alam.
                </li>
                <li>
                  Kualitas Hidup: Menyediakan ruang hijau yang meningkatkan
                  kesejahteraan.
                </li>
                <li>Kewajiban Moral: Menjaga bumi untuk generasi mendatang.</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apa yang menjadi penyebab utama masalah kebersihan lingkungan di
              Indonesia?
            </div>
            <div className="collapse-content">
              <ul className="list-decimal ps-4">
                <li>
                  Kurangnya kesadaran: Banyak orang belum menyadari pentingnya
                  menjaga kebersihan lingkungan.
                </li>
                <li>
                  Pengelolaan sampah yang buruk: Sistem pengelolaan sampah belum
                  memadai, fasilitas daur ulang kurang, dan layanan pengangkutan
                  sampah tidak merata.
                </li>
                <li>
                  Urbanisasi dan pertumbuhan penduduk: Pertumbuhan kota yang
                  cepat meningkatkan jumlah sampah.
                </li>
                <li>
                  Urbanisasi dan pertumbuhan penduduk: Pertumbuhan kota yang
                  cepat meningkatkan jumlah sampah.
                </li>
                <li>
                  Regulasi dan penegakan hukum yang lemah: Aturan kurang tegas
                  dan sanksi tidak memberikan efek jera.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Apa langkah-langkah yang dapat diambil untuk meningkatkan
              kebersihan lingkungan di Indonesia?
            </div>
            <div className="collapse-content">
              <p>
                Langkah - langkahnya antara lain adalah meningkatkan kesadaran
                masyarakat akan pentingnya membuang sampah pada tempatnya,
                menggalakkan kampanye pengurangan penggunaan plastik sekali
                pakai, dan meningkatkan infrastruktur pengelolaan sampah seperti
                pengolahan sampah organik dan daur ulang.
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="block outline-2 outline-dotted outline-[#636363] mt-10"></span>
      <Dampak />
      <div className="mt-4">
      <Dampakk />
      </div>
    </div>
  );
};

export default Faq;
