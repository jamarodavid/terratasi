import { motion } from "framer-motion";

const TextContent = () => {
  return (
    <div className="font-poppins">
      <motion.div
        className="mb-6 lg:mb-10 p-4 lg:p-6 text-color-2 md:min-h-screen"
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
        className="mb-6 lg:mb-10 p-4 lg:p-6 text-color-2 md:min-h-screen"
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
        className="mb-6 lg:mb-10 p-4 lg:p-6 text-color-2 md:min-h-screen"
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
        className="mb-6 lg:mb-10 p-4 lg:p-6 text-color-2 md:min-h-screen"
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

export default TextContent;
