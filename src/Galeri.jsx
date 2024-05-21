import React from "react";
import Nav2 from "./components/Nav2";
import "./styleee.css"; // Import file CSS di sini

function Galeri() {
	return (
		<div>
			<Nav2 />
			<section className="px-[4rem] py-36">
				<p className="text-center font-poppins text-2xl text-color-1">
					G A L E R I
				</p>
				<p className="teks text-center font-lora text-4xl md:text-[2.5rem] font-bold text-color-1">
					Barang - Barang Daur Ulang <br /> Dari Limbah Sampah
				</p>
				<br />
				<div className=" grid md:grid-cols-3 grid-cols-1 gap-2 text-center border-[5px] rounded-xl border-[#82DF85] p-12 ">
					<div className=" md:col-span-2 ">
						<img
							src="./src/assets/img/daurulang1.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
					<div className="">
						<img
							src="./src/assets/img/daurulang2.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
					<div className="">
						<img
							src="./src/assets/img/daurulang3.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
					<div className="">
						<img
							src="./src/assets/img/daurulang4.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
					<div className="">
						<img
							src="./src/assets/img/daurulang5.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
					<div className="">
						<img
							src="./src/assets/img/daurulang6.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
					<div className="md:col-span-2">
						<img
							src="./src/assets/img/daurulang7.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
					<div className="md:col-span-3">
						<img
							src="./src/assets/img/daurulang8.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
                    <div className="md:col-span-2">
						<img
							src="./src/assets/img/daurulang9.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
                    <div className="">
						<img
							src="./src/assets/img/daurulang10.png"
							className="gambar rounded-xl"
							alt=""
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Galeri;
