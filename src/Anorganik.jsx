import React from "react";
import Nav2 from "./components/Nav2";

const OrganikPage = () => {
	return (
		<div>
			<Nav2 />
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
								src="./src/assets/img/anorganik2.png"
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
			</section>
		</div>
	);
};

export default OrganikPage;
