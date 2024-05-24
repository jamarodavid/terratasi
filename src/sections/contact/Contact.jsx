import React from "react";

const Contact = () => {
	return (
		<div>
			<section>
				<p className="text-center font-poppins text-2xl text-color-1">
					C O N T A C T
				</p>
				<br />
				<div className="border-[5px] rounded-xl border-[#82DF85] p-12 ">
					<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
						<div class="bg-[#82DF85] rounded-[1.62rem] border-[3px] border-[#1D4735]">
							<img src="./src/assets/img/contact/kontak.png" className="w-full flex flex-end" alt="" />
						</div>
						<div class="col-span-1 xl:col-span-2  bg-[#82DF85] font-poppins rounded-[1.62rem] border-[3px] border-[#1D4735] text-color-3 p-4 flex flex-col justify-center">
							<p className="font-bold xl:text-2xl ">Jamaro David Saragih </p> 
                            

                            <p className="font-bold  xl:text-xl ">(Team Leader - Front End)</p> 
                            <p className="font-medium xl:text-lg">
                            Saya Jamaro David
							Saragih, siswa SMKN 69 Jakarta, Jurusan SIJA (Sistem Informatika
							Jaringan Aplikasi). Saya memiliki antusiasme dalam teknologi
							informasi dan perangkat lunak. Menurut saya seseorang yang dapat
							mengembangkan berbagai aplikasi, website, atau solusi teknologi
							lainnya dapat memberikan dampak positif bagi masyarakat.
                            </p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
