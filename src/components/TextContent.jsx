import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TextContent = () => {
  const { ref: refHeader, inView: inViewHeader } = useInView();
  const { ref: refSection1, inView: inViewSection1 } = useInView();
  const { ref: refSection2, inView: inViewSection2 } = useInView();
  const { ref: refSection3, inView: inViewSection3 } = useInView();
  const { ref: refSection4, inView: inViewSection4 } = useInView();

  const controls = useAnimation();

  useEffect(() => {
    if (inViewHeader) controls.start("visible");
    if (inViewSection1) controls.start("visible");
    if (inViewSection2) controls.start("visible");
    if (inViewSection3) controls.start("visible");
    if (inViewSection4) controls.start("visible");
  }, [
    controls,
    inViewHeader,
    inViewSection1,
    inViewSection2,
    inViewSection3,
    inViewSection4,
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-poppins">
      <motion.div
        className="mb-6 lg:mb-10 lg:p-6 text-color-2"
        ref={refHeader}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Tips dan Trik Pengelolaan Sampah
        </motion.h2>
        <ul className="list-decimal">
          <motion.li variants={itemVariants}>
            Pisahkan Sampah: Pisahkan antara sampah organik dan non-organik
            untuk memudahkan pengolahan dan daur ulang.
          </motion.li>
          <motion.li variants={itemVariants}>
            Kompos: Gunakan sampah organik untuk membuat kompos sebagai pupuk
            alami.
          </motion.li>
          <motion.li variants={itemVariants}>
            Kurangi Penggunaan Plastik: Hindari penggunaan plastik sekali pakai
            dengan membawa tas belanja sendiri dan menggunakan produk dengan
            kemasan yang lebih ramah lingkungan.
          </motion.li>
          <motion.li variants={itemVariants}>
            Patuhi Aturan Lokal: Kenali dan patuhi aturan pengelolaan sampah
            yang berlaku di daerah Anda.
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        className="mb-6 lg:mb-10 lg:p-6 text-color-2"
        ref={refSection1}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Tips Agar Tempat Wisata Tetap Bersih
        </motion.h2>
        <ul className="list-decimal">
          <motion.li variants={itemVariants}>
            Edukasi Pengunjung: Sosialisasikan kepada pengunjung tentang
            pentingnya menjaga kebersihan dan cara membuang sampah dengan benar.
          </motion.li>
          <motion.li variants={itemVariants}>
            Penegakan Aturan: Terapkan aturan dan sanksi bagi pengunjung yang
            melanggar peraturan kebersihan.
          </motion.li>
          <motion.li variants={itemVariants}>
            Penempatan Tempat Sampah: Pasang tempat sampah yang mencukupi di
            seluruh area tempat wisata dan pastikan mudah diakses.
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        className="mb-6 lg:mb-10 lg:p-6 text-color-2"
        ref={refSection2}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Daur Ulang Sampah
        </motion.h2>
        <ul className="list-decimal">
          <motion.li variants={itemVariants}>
            Pemilahan yang Tepat: Pastikan memilah sampah secara benar
            berdasarkan jenisnya, seperti kertas, plastik, logam, dan kaca,
            untuk memudahkan proses daur ulang.
          </motion.li>
          <motion.li variants={itemVariants}>
            Bersihkan Sampah: Sebelum membuang, pastikan membersihkan sampah
            yang akan didaur ulang dari kotoran atau kontaminan lainnya, seperti
            sisa makanan pada kemasan plastik.
          </motion.li>
          <motion.li variants={itemVariants}>
            Kreativitas dalam Penggunaan Kembali: Manfaatkan kreativitas Anda
            untuk mengubah barang-barang bekas menjadi barang-barang baru yang
            berguna, seperti kerajinan tangan, dekorasi rumah, atau alat-alat
            praktis.
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        className="mb-6 lg:mb-10 lg:p-6 text-color-2"
        ref={refSection3}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Inisiatif Ramah Lingkungan
        </motion.h2>
        <ul className="list-decimal">
          <motion.li variants={itemVariants}>
            Perubahan Pribadi: Lakukan perubahan kecil dalam kehidupan
            sehari-hari yang mendukung lingkungan, seperti penggunaan tas
            belanja kain dan pengurangan penggunaan plastik sekali pakai.
          </motion.li>
          <motion.li variants={itemVariants}>
            Penggunaan Transportasi Berkelanjutan: Gunakan transportasi umum,
            berjalan kaki, atau bersepeda untuk mengurangi emisi gas rumah kaca
            dari transportasi pribadi.
          </motion.li>
          <motion.li variants={itemVariants}>
            Pendukung Kebijakan Lingkungan: Menyuarakan pendapat dan mendukung
            kebijakan lingkungan yang lebih baik melalui partisipasi dalam
            pemilihan umum, petisi, atau aksi advokasi.
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default TextContent;
