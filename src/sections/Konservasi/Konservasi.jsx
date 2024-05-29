import { motion } from "framer-motion";
import {
  konservasi1,
  konservasi2,
  konservasi3,
  konservasi4,
  konservasi5,
  konservasi6,
  konservasi7,
  konservasi8,
  konservasi9,
} from "../../assets";

const Konservasi = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#B7DF82"
          fill-opacity="1"
          d="M0,256L10.4,266.7C20.9,277,42,299,63,282.7C83.5,267,104,213,125,165.3C146.1,117,167,75,188,53.3C208.7,32,230,32,250,69.3C271.3,107,292,181,313,202.7C333.9,224,355,192,376,154.7C396.5,117,417,75,438,80C459.1,85,480,139,501,149.3C521.7,160,543,128,563,117.3C584.3,107,605,117,626,117.3C647,117,668,107,689,122.7C709.6,139,730,181,751,176C772.2,171,793,117,814,85.3C834.8,53,856,43,877,48C897.4,53,918,75,939,101.3C960,128,981,160,1002,170.7C1022.6,181,1043,171,1064,192C1085.2,213,1106,267,1127,266.7C1147.8,267,1169,213,1190,202.7C1210.4,192,1231,224,1252,229.3C1273,235,1294,213,1315,218.7C1335.7,224,1357,256,1377,224C1398.3,192,1419,96,1430,48L1440,0L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"
        ></path>
      </svg>

      <div className="bg-gradient-1 p-20 text-color-2 font-poppins">
        <div className="flex justify-center items-center h-screen">
          <h1 className="uppercase font-semibold lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-center">
            Konservasi Hijau
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          <div className="relative">
            <div className="lg:sticky lg:top-0 lg:h-screen overflow-hidden flex flex-wrap p-4 lg:p-10 w-full">
              <div class="flex space-x-4">
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-4">
                  <div class="h-[367px] w-44 overflow-hidden">
                    <img
                      src={konservasi1}
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="h-[367px] w-44 overflow-hidden">
                    <img
                      src={konservasi2}
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="h-[367px] w-44 overflow-hidden">
                    <img
                      src={konservasi3}
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-4">
                  <div class="h-[471px] w-72 overflow-hidden">
                    <img
                      src={konservasi4}
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="h-[471px] w-72 overflow-hidden">
                    <img
                      src={konservasi5}
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="h-[189px] w-72 overflow-hidden">
                    <img
                      src={konservasi6}
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-4">
                  <div class="h-[367px] w-44 overflow-hidden">
                    <img
                      src={konservasi7}
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="h-h-[367px] w-44 overflow-hidden">
                    <img
                      src={konservasi8}
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="h-[367px] w-44 overflow-hidden">
                    <img
                      src={konservasi9}
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6 p-4 lg:p-10">
            <TextContent />
          </div>
        </div>
      </div>
    </>
  );
};

const TextContent = () => {
  return (
    <div className="font-poppins">
      <motion.div
        className="mb-6 lg:mb-10 p-4 lg:p-6 text-color-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Tips dan Trik Pengelolaan Sampah
        </h2>
        <ul className="list-decimal">
          <li>
            Pisahkan Sampah: Pisahkan antara sampah organik dan non-organik
            untuk memudahkan pengolahan dan daur ulang.
          </li>
          <li>
            Kompos: Gunakan sampah organik untuk membuat kompos sebagai pupuk
            alami.
          </li>
          <li>
            Kurangi Penggunaan Plastik: Hindari penggunaan plastik sekali pakai
            dengan membawa tas belanja sendiri dan menggunakan produk dengan
            kemasan yang lebih ramah lingkungan.
          </li>
          <li>
            Patuhi Aturan Lokal: Kenali dan patuhi aturan pengelolaan sampah
            yang berlaku di daerah Anda.
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="mb-6 lg:mb-10 p-4 lg:p-6 text-color-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Tips Agar Tempat Wisata Tetap Bersih
        </h2>
        <ul className="list-decimal">
          <li>
            Edukasi Pengunjung: Sosialisasikan kepada pengunjung tentang
            pentingnya menjaga kebersihan dan cara membuang sampah dengan benar.
          </li>
          <li>
            Penegakan Aturan: Terapkan aturan dan sanksi bagi pengunjung yang
            melanggar peraturan kebersihan.
          </li>
          <li>
            Penempatan Tempat Sampah: Pasang tempat sampah yang mencukupi di
            seluruh area tempat wisata dan pastikan mudah diakses.
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="mb-6 lg:mb-10 p-4 lg:p-6 text-color-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Daur Ulang Sampah
        </h2>
        <ul className="list-decimal">
          <li>
            Pemilahan yang Tepat: Pastikan memilah sampah secara benar
            berdasarkan jenisnya, seperti kertas, plastik, logam, dan kaca,
            untuk memudahkan proses daur ulang.
          </li>
          <li>
            Bersihkan Sampah: Sebelum membuang, pastikan membersihkan sampah
            yang akan didaur ulang dari kotoran atau kontaminan lainnya, seperti
            sisa makanan pada kemasan plastik.
          </li>
          <li>
            Kreativitas dalam Penggunaan Kembali: Manfaatkan kreativitas Anda
            untuk mengubah barang-barang bekas menjadi barang-barang baru yang
            berguna, seperti kerajinan tangan, dekorasi rumah, atau alat-alat
            praktis.
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="mb-6 lg:mb-10 p-4 lg:p-6 text-color-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Inisiatif Ramah Lingkungan
        </h2>
        <ul className="list-decimal">
          <li>
            Perubahan Pribadi: Lakukan perubahan kecil dalam kehidupan
            sehari-hari yang mendukung lingkungan, seperti penggunaan tas
            belanja kain dan pengurangan penggunaan plastik sekali pakai.
          </li>
          <li>
            Penggunaan Transportasi Berkelanjutan: Gunakan transportasi umum,
            berjalan kaki, atau bersepeda untuk mengurangi emisi gas rumah kaca
            dari transportasi pribadi.
          </li>
          <li>
            Pendukung Kebijakan Lingkungan: Menyuarakan pendapat dan mendukung
            kebijakan lingkungan yang lebih baik melalui partisipasi dalam
            pemilihan umum, petisi, atau aksi advokasi.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Konservasi;
