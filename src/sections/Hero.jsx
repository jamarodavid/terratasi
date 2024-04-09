import "./stylee.css"; // Import file CSS di sini

const Hero = () => {
	return (
		<section
			id="hero"
			className="min-h-screen bg-gradient-to-b from-gradient-1 to-gradient-2 rounded-[70px]"
		>
			
			
			<div className="flex justify-center py-15 font-lora">
				<h1 className="md:text-5xl pt-7 text-xl text-center text-color-2 font-semibold leading-normal">
					Mari Bersama-sama, Lestarikan Nusantara
					<br />
					Satu Langkah Demi Kesejahteraan Alam
				</h1>
			</div>
			<div className="flex justify-center">
				<p className="md:text-xl text-sm  w-1/2  text-center p-2 md:w-3/4 text-color-2 leading-normal font-poppins">
					"TerraTasi" adalah sebuah platform daring yang bertujuan untuk
					mengedukasi dan menginspirasi masyarakat tentang pentingnya menjaga
					kebersihan lingkungan, terutama di tempat-tempat wisata di Nusantara.
				</p>
			</div>
			<div className="flex justify-center">
      <button >
        
					<span className="circle">
            
						<span className="icon arrow"></span>
					</span>
					<span className="text text-[16px]">Lihat Selengkapnya</span>
          
				</button>
			</div>

      <div className="flex justify-center pb-4 gap-4">
      <div className=" grid gap-3 pl-5">
      <img src="./src/assets/img/poto1.png" className="w-[211px]" alt="" />
      <img src="/src/assets/img/poto2.png" className="w-[211px]" alt="" srcset="" />
      </div>
      <img src="./src/assets/img/poto3.png" className="w-[211px] mt-[130px]" alt="" />
      <img src="./src/assets/img/poto4.png" className="w-[232px] h-[180px] mt-[260px]" alt="" />
      <img src="./src/assets/img/poto5.png" className="w-[211px] mt-[130px]" alt="" />
      <div className=" grid gap-3 ">
      <img src="./src/assets/img/poto6.png" className="w-[211px]" alt="" />
      <img src="/src/assets/img/poto7.png" className="w-[211px]" alt="" srcset="" />
      </div>
      </div>
		</section>
    
	);
};

export default Hero;
