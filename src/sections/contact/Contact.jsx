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
					<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
						<div class="bg-[#82DF85] rounded-[1.62rem] md:w-full  border-[3px] border-[#1D4735]">
							<div className=" flex justify-center gap-10 pt-4">
								<a
									href="https://github.com/jamarodavid"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./src/assets/img/contact/github.png"
										alt=""
										className="w-[2rem]"
										srcset=""
									/>
								</a>
								<a
									href="https://www.instagram.com/jmrodvd/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./src/assets/img/contact/instagram.png"
										alt=""
										className="w-[2rem]"
										srcset=""
									/>
								</a>
								<a
									href="https://www.linkedin.com/in/jamaro-david-saragih-244975178/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./src/assets/img/contact/linkedn.png"
										alt=""
										className="w-[2rem]"
										srcset=""
									/>
								</a>
							</div>
							<img
								src="./src/assets/img/contact/kontak.png"
								className="w-full"
								alt=""
							/>
						</div>
						<div class="col-span-1 xl:col-span-2   bg-[#82DF85] font-poppins rounded-[1.62rem] border-[3px] border-[#1D4735] text-color-3 p-4 flex flex-col justify-center">
							<div className="">
								<p className="font-bold  text-[10px]  md:text-base lg:text-lg xl:text-3xl ">
									Jamaro David Saragih{" "}
								</p>

								<p className="font-bold  text-[10px]  md:text-xs lg:text-lg xl:text-2xl ">
									(Team Leader - Front End)
								</p>
								<p className="font-medium text-[10px] md:text-xs lg:text-lg xl:text-xl">
									Saya Jamaro David Saragih, siswa SMKN 69 Jakarta, Jurusan SIJA
									(Sistem Informatika Jaringan Aplikasi). Saya memiliki
									antusiasme dalam teknologi informasi dan perangkat lunak.
									Menurut saya seseorang yang dapat mengembangkan berbagai
									aplikasi, website, atau solusi teknologi lainnya dapat
									memberikan dampak positif bagi masyarakat.
								</p>
							</div>
						</div>
					</div>
					<br />
					<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
						<div class="bg-[#82DF85] rounded-[1.62rem] md:w-full  border-[3px] border-[#1D4735]">
							<div className=" flex justify-center gap-10 pt-4">
								<a
									href="https://github.com/RadityaRohman"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./src/assets/img/contact/github.png"
										alt=""
										className="w-[2rem]"
										srcset=""
									/>
								</a>
								<a
									href="https://www.instagram.com/raditya26._/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./src/assets/img/contact/instagram.png"
										alt=""
										className="w-[2rem]"
										srcset=""
									/>
								</a>
								<a
									href="https://www.linkedin.com/in/raditya-ananda-rohman-71b112262/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./src/assets/img/contact/linkedn.png"
										alt=""
										className="w-[2rem]"
										srcset=""
									/>
								</a>
							</div>
							<img
								src="./src/assets/img/contact/kontakk.png"
								className="w-full pt-4 "
								alt=""
							/>
						</div>
						<div class="col-span-1 xl:col-span-2   bg-[#82DF85] font-poppins rounded-[1.62rem] border-[3px] border-[#1D4735] text-color-3 p-4 flex flex-col justify-center">
							<div className="">
								<p className="font-bold  text-[10px]  md:text-lg  xl:text-3xl ">
									Raditya Ananda Rohman
								</p>

								<p className="font-bold  text-[10px]  md:text-xs lg:text-lg xl:text-2xl ">
									(Member - Front End)
								</p>
								<p className="font-medium text-[10px] md:text-xs lg:text-lg xl:text-xl">
									Saya Raditya Ananda Rohman siswa SMK Negeri 69 Jakarta jurusan
									SIJA (Sistem Informasi Jaringan dan Aplikasi). Sebagai seorang
									siswa yang juga memiliki minat dalam bidang Front-End Website
									Development. Bagi saya, menjadi seorang front end developer
									adalah tentang menciptakan pengalaman yang menarik dan
									interaktif bagi pengguna di berbagai platform web.
								</p>
							</div>
						</div>
					</div>
				</div>
				<p className="font-semibold md:text-4xl font-poppins text-2xl text-center pt-11 text-color-1">
					Let's collaborate together
				</p>
			</section>
		</div>
	);
};

export default Contact;
