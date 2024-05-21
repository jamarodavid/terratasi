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
							Sampah <br /> Organik
						</h1>
                </div>
                <div class="md:w-2/5">
                    <img src="./src/assets/img/organik2.png" class="w-full mt-2  hover:shadow-[12px_12px_0_0_#82DF85] rounded-[25px] transition-shadow" alt="" />
                </div>
            </div>
            <p className="text-center font-poppins md:px-10 pt-7 md:text-2xl text-sm text-color-1 font-semibold">Sampah organik terdiri dari bahan-bahan yang berasal dari sumber-sumber hayati dan dapat terurai secara alami oleh mikroorganisme dalam proses pengomposan. Contohnya termasuk sisa makanan, daun, ranting, potongan tanaman, dan kertas yang terkontaminasi dengan bahan organik seperti kertas makanan. Sampah organik merupakan bagian besar dari sampah rumah tangga dan dapat menjadi sumber utama untuk menghasilkan kompos. Pengomposan merupakan proses alami yang memecah sampah organik menjadi humus yang kaya nutrisi, yang kemudian dapat digunakan untuk meningkatkan kesuburan tanah.</p>
            
            </div>
			</section>
		</div>
	);
};

export default OrganikPage;
